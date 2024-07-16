/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ChangeEvent } from 'react';
import React, { useRef } from 'react';
import './main.css';

type ImageUploaderProps = {
  onImageUpload: (file: File) => void;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="image-uploader" onClick={handleDivClick}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        ref={fileInputRef}
        className="file-input"
      />
      <p>Click here</p>
    </div>
  );
};

export default ImageUploader;
