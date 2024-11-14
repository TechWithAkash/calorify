export default function handler(req, res) {
    if (req.method === 'POST') {
      const { foodImage } = req.body;
  
      // Mock analysis result
      const result = {
        isHealthy: true,
        calories: 250,
        nutrients: { protein: '15g', carbs: '30g', fats: '10g' },
      };
  
      res.status(200).json({ success: true, data: result });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  