import { NextResponse } from 'next/server';

import { auth } from './auth';

export async function middleware() {
  const session = await auth();
  if (!session) {
    // 로그인 안했으면 돌아가거라
    return NextResponse.redirect('http://localhost:3000/i/flow/login');
  }
}

export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};
