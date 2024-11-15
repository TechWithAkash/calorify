// 2. app/lib/food-analysis.js
export async function analyzeFoodImage(file) {
    try {
      const formData = new FormData();
      formData.append('image', file);
  
      // First, use Cloud Vision API to identify the food
      const visionResponse = await fetch('/api/analyze-food', {
        method: 'POST',
        body: formData,
      });
      
      if (!visionResponse.ok) {
        throw new Error('Failed to analyze image');
      }
  
      return await visionResponse.json();
    } catch (error) {
      console.error('Error analyzing food:', error);
      throw error;
    }
  }