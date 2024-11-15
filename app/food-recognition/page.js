'use client'
import { useState } from 'react';
import FoodRecognition from '../components/FoodRecognition';
import CameraCapture from '../components/CameraCapture';

export default function FoodRecognitionPage() {
  const [photo, setPhoto] = useState(null);

  const handleCapture = (capturedPhoto) => {
    setPhoto(capturedPhoto);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Food Recognition</h1>
      
      <CameraCapture onCapture={handleCapture} />
      
      {photo && (
        <div className="mt-6">
          <FoodRecognition photo={photo} />
        </div>
      )}
    </div>
  );
}
