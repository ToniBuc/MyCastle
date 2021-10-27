import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Title from './Title';
import UploadForm from './UploadForm';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="Home">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default Home;