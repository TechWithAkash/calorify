import { NextResponse } from 'next/server';

export async function GET(req) {
  const { food } = req.nextUrl.searchParams;
  const appId = 'your-nutritionix-app-id';
  const appKey = 'your-nutritionix-app-key';

  try {
    const response = await fetch(`https://api.nutritionix.com/v1_1/search/${food}?results=0:1&fields=item_name,brand_name,nf_calories&appId=${appId}&appKey=${appKey}`);
    const data = await response.json();
    if (data.hits.length > 0) {
      return NextResponse.json(data.hits[0].fields);
    } else {
      return NextResponse.json({ error: 'Food not found' }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching nutrition data:", error);
    return NextResponse.json({ error: 'Failed to fetch nutrition data' }, { status: 500 });
  }
}
