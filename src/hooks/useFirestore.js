import { useEffect, useState } from 'react';
import { db } from '../config/firebase';

export const useFirestore = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db
      .collection('images')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let dbSnap = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setImages(dbSnap);
        setLoading(false);
      });
    return unsubscribe;
  }, []);

  return { images, loading };
};
