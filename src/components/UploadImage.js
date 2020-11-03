import { useState } from 'react';
import { motion } from 'framer-motion';
import './uploadImage.css';
import { useStorage } from '../hooks/useStorage';

const UploadImage = ({ animate }) => {
  const { uploadPhoto, progress, loading } = useStorage();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [errors, setErrors] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = ({ target }) => {
    let selectedFile = target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setErrors(null);
    } else {
      setFile(null);
      setErrors('Please select an image file (png or jpg)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadPhoto(file, title, desc);
    setFile(null);
    setTitle('');
    setDesc('');
    setErrors(null);
  };

  return (
    <motion.div className="upload-image" animate={animate}>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="file" onChange={handleChange} hidden />
          <span className="add-image">+</span>
        </label>
        <div className="upload-content">
          {file && <img src={URL.createObjectURL(file)} alt="uploaded" />}
          {file && <div>{file.name}</div>}
        </div>
        <div className="upload-input">
          <input
            type="text"
            placeholder="  Title"
            required
            hidden={!file}
            onChange={({ target }) => setTitle(target.value)}
            value={title}
          />
          <textarea
            cols="20"
            rows="4"
            placeholder="  Description"
            required
            hidden={!file}
            value={desc}
            onChange={({ target }) => setDesc(target.value)}></textarea>
        </div>
        <input
          type="submit"
          value="SEND"
          hidden={!file}
          className="image-upload-btn"
        />
      </form>
      <div className="upload-error">
        {errors && <div className="upload-error">{errors}</div>}
        {loading && (
          <div
            className="upload-progress"
            style={{ width: progress + '%' }}></div>
        )}
      </div>
    </motion.div>
  );
};

export default UploadImage;
