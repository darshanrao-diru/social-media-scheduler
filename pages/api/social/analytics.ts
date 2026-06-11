import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      impressions: 125000,
      engagement: 3500,
      clicks: 1200,
      followers: 5400,
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
