import { container } from '@/server/container';
import GetAllGamesDetailsService from '@/server/useCases/getAllGamesDetails/getAllGamesDetailsService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): NextResponse {
  try {
    const { gamesDetailsRepository } = container();
    const getAllGamesDetailsService = new GetAllGamesDetailsService({ gamesDetailsRepository });
    const gamesDetails = getAllGamesDetailsService.execute();
    return NextResponse.json({ success: true, gamesDetails }, { status: 200 });
  } catch (error) {
    //TO DO -> create new error
    console.error(error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
