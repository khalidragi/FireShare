import { useState } from 'react';
import { useCycle } from 'framer-motion';
import './header.css';
import UploadImage from './UploadImage';

const Header = () => {
  const [upload, setUpload] = useState(false);
  const [animate, cycle] = useCycle({ x: '-100vw' }, { x: 0 });
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FireShare</h1>
          <p>Share your photos</p>
        </div>
        <div
          className="right"
          onClick={() => {
            setUpload(!upload);
            cycle();
          }}>
          {upload ? 'close' : 'upload'}
        </div>
      </div>
      <UploadImage animate={animate} />
    </div>
  );
};

export default Header;
