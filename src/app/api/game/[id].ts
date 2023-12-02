import { container } from '@/server/container';
import GetGameDetailByIdService from '@/server/useCases/getGameDetailById/getGameDetailByIdService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check if the HTTP method is GET
    if (req.method !== 'GET') {
      return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
    const gameId = req.query.id;

    if (typeof gameId !== 'string') {
      return res.status(400).json({ success: false, error: 'Invalid Game ID' });
    }

    const { gamesDetailsRepository } = container();
    const getGameDetailByIdService = new GetGameDetailByIdService({ gamesDetailsRepository });

    const gameDetail = getGameDetailByIdService.execute(gameId);

    if (!gameDetail) {
      return res.status(404).json({ success: false, error: 'Game Not Found' });
    }

    return res.status(200).json({ success: true, gameDetail });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
