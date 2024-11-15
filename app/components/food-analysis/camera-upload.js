// 2. app/components/food-analysis/camera-upload.js
import React, { useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CameraUpload = ({ onImageCapture }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onImageCapture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Camera Upload Option */}
      <Card className="cursor-pointer hover:bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera size={24} />
            Take Photo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-lg">
            <span className="text-gray-500">Open Camera</span>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </CardContent>
      </Card>

      {/* File Upload Option */}
      <Card className="cursor-pointer hover:bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload size={24} />
            Upload Image
          </CardTitle>
        </CardHeader>
        <CardContent>
          <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-lg">
            <span className="text-gray-500">Choose Image</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </CardContent>
      </Card>
    </div>
  );
};