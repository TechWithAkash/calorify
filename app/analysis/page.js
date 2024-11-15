// 1. app/analysis/page.js
'use client';

import { useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { analyzeFoodImage } from '../lib/food-analysis';
export default function AnalysisPage() {
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleImage = async (file) => {
    try {
      setIsAnalyzing(true);
      setError(null);
      
      // Convert file to base64
      const base64Image = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
      
      setImage(base64Image);
      
      // Analyze the image
      const analysisResults = await analyzeFoodImage(file);
      setResults(analysisResults);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Analyze Your Food</h1>
      
      {/* Image Upload UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Camera Upload */}
        <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
          <Camera className="w-8 h-8 mb-2 text-gray-500" />
          <span className="text-sm text-gray-500">Take a Photo</span>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => handleImage(e.target.files[0])}
          />
        </label>

        {/* File Upload */}
        <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
          <Upload className="w-8 h-8 mb-2 text-gray-500" />
          <span className="text-sm text-gray-500">Upload Image</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImage(e.target.files[0])}
          />
        </label>
      </div>

      {/* Results Display */}
      {isAnalyzing && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Analyzing your food...</p>
        </div>
      )}

      {results && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{results.calories}</p>
              <p className="text-sm text-gray-500">Calories</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{results.protein}g</p>
              <p className="text-sm text-gray-500">Protein</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{results.carbs}g</p>
              <p className="text-sm text-gray-500">Carbs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{results.fat}g</p>
              <p className="text-sm text-gray-500">Fat</p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
}