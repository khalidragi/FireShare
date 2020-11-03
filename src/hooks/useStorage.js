import { useState } from 'react';
import { storage, db } from '../config/firebase';

export const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [upload, setUpload] = useState(false);

  const uploadPhoto = (file, title, desc) => {
    const storageRef = storage.ref(file.name + Date.now());
    setLoading(true);

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (err) => setError(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        await db.collection('images').add({
          title,
          desc,
          url,
          createdAt: Date.now(),
        });
        setLoading(false);
        setUpload(false);
      }
    );
  };

  return { uploadPhoto, progress, error, loading, upload, setUpload };
};
