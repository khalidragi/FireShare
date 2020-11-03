import { useFirestore } from '../hooks/useFirestore';
import './imagesGrid.css';
import { motion } from 'framer-motion';

const ImagesGrid = ({ setSelectedImg }) => {
  const { images } = useFirestore();
  return (
    <div className="images-grid">
      {images &&
        images.map((image) => (
          <motion.div
            className="image-wrap"
            layout
            whileHover={{ opacity: 1 }}
            key={image.id}
            onClick={() => setSelectedImg(image)}>
            <motion.img
              src={image.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}>
              {image.title}
            </motion.p>
          </motion.div>
        ))}
    </div>
  );
};

export default ImagesGrid;
