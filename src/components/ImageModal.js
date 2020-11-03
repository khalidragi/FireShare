import './imageModal.css';
import { motion } from 'framer-motion';

const ImageModal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = ({ target }) => {
    if (target.type !== 'img') {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="image-modal"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <motion.div
        className="image-container"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'just' }}>
        <img src={selectedImg.url} alt="enlarged" />
        <h3>{selectedImg.title}</h3>
        <p>{selectedImg.desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
