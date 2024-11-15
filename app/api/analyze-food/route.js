// import { NextResponse } from 'next/server';

// export async function GET(req) {
//   const { food } = req.nextUrl.searchParams;
//   const appId = 'your-nutritionix-app-id';
//   const appKey = 'your-nutritionix-app-key';

//   try {
//     const response = await fetch(`https://api.nutritionix.com/v1_1/search/${food}?results=0:1&fields=item_name,brand_name,nf_calories&appId=${appId}&appKey=${appKey}`);
//     const data = await response.json();
//     if (data.hits.length > 0) {
//       return NextResponse.json(data.hits[0].fields);
//     } else {
//       return NextResponse.json({ error: 'Food not found' }, { status: 404 });
//     }
//   } catch (error) {
//     console.error("Error fetching nutrition data:", error);
//     return NextResponse.json({ error: 'Failed to fetch nutrition data' }, { status: 500 });
//   }
// }


// Example implementation for app/api/analyze-food/route.js
import { ImageAnnotatorClient } from '@google-cloud/vision';
import { NextResponse } from 'next/server';

const vision = new ImageAnnotatorClient();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');
    
    // 1. Analyze image with Cloud Vision API
    const [result] = await vision.labelDetection(image);
    const labels = result.labelAnnotations;
    
    // 2. Match labels with nutritional database
    const foodItem = labels[0].description;
    
    // 3. Fetch nutritional data
    const nutritionResponse = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}&ingr=${foodItem}`
    );
    
    const nutritionData = await nutritionResponse.json();
    
    return NextResponse.json(nutritionData);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error({ message: 'Failed to analyze image' });
  }
}