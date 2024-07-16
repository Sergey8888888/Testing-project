/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ImageUploader from './LoadImg';
import './main.css';


const MainPage = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
    reader.onerror = () => {
      console.error('Error reading the file');
    };
  };

  return (
    <div className="main-page">
      <h1>Еhe best cars</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
      ) : (
        <div className="image-placeholder">
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>
      )}
    </div>
  );
};

export default MainPage;