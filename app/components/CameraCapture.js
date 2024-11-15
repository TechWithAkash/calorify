'use client'
import { useRef, useState } from 'react';

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => {
          console.log("Error accessing camera:", err);
        });
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    setPhoto(dataUrl);
    onCapture(dataUrl);  // Pass the captured photo back to parent component
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={capturePhoto}>Capture Photo</button>
      <button onClick={stopCamera}>Stop Camera</button>
      
      <video ref={videoRef} width="100%" height="auto" autoPlay></video>
      
      {photo && (
        <div>
          <h2>Captured Photo</h2>
          <img src={photo} alt="Captured Food" />
        </div>
      )}
    </div>
  );
}
