// 3. app/components/food-analysis/stats-display.js
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const StatsDisplay = ({ results }) => {
  if (!results) return null;

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Nutritional Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Suggestions:</h4>
          <ul className="list-disc pl-4">
            {results.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
