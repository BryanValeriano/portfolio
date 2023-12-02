import { container } from '@/server/container';
import GetGameDetailByIdService from '@/server/useCases/getGameDetailById/getGameDetailByIdService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
) {
  try {
    const gameId = req.nextUrl.searchParams.get('id');
    if (typeof gameId !== 'string') {
      return NextResponse.json({ success: false, error: 'Invalid Game ID format' }, { status: 400 });
    }

    const { gamesDetailsRepository } = container();
    const getGameDetailByIdService = new GetGameDetailByIdService({ gamesDetailsRepository });
    const gameDetail = await getGameDetailByIdService.execute(gameId);

    if (!gameDetail) {
      return NextResponse.json({ success: false, error: 'Game Not Found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, gameDetail }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
