import { useState } from 'react';
import Header from './components/Header';
import ImageModal from './components/ImageModal';
import ImagesGrid from './components/ImagesGrid';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Header />
      <ImagesGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
