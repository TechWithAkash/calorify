'use client'
import { useState } from 'react';
import { ClarifaiApp } from 'clarifai'; // Clarifai API for food recognition
import { FaArrowLeft } from 'react-icons/fa';

const clarifaiApp = new ClarifaiApp({
  apiKey: 'your-clarifai-api-key' // Your Clarifai API key
});

const fetchCalorieData = async (foodName) => {
  const response = await fetch(`/api/food-recognition?food=${foodName}`);
  const data = await response.json();
  return data; // Returns calorie and nutrition data
};

export default function FoodRecognition({ photo }) {
  const [foodData, setFoodData] = useState(null);
  const [calorieData, setCalorieData] = useState(null);

  const analyzeFood = async () => {
    if (!photo) return;

    try {
      const response = await clarifaiApp.models.predict(Clarifai.FOOD_MODEL, photo);
      const foodItems = response.outputs[0].data.concepts;
      setFoodData(foodItems);
      
      // Assuming first item is the most relevant food detected
      const foodName = foodItems[0].name;
      const nutritionInfo = await fetchCalorieData(foodName);
      setCalorieData(nutritionInfo);
    } catch (error) {
      console.error("Error recognizing food:", error);
    }
  };

  return (
    <div>
      <button onClick={analyzeFood}>Analyze Food</button>
      
      {foodData && (
        <div>
          <h3>Detected Foods</h3>
          <ul>
            {foodData.map(item => (
              <li key={item.id}>
                {item.name} - {Math.round(item.value * 100)}% confident
              </li>
            ))}
          </ul>
        </div>
      )}

      {calorieData && (
        <div>
          <h4>{calorieData.item_name}</h4>
          <p>Brand: {calorieData.brand_name}</p>
          <p>Calories: {calorieData.nf_calories} kcal</p>
        </div>
      )}
    </div>
  );
}
