import { NextResponse } from 'next/server';

import { auth } from './auth';

// eslint-disable-next-line consistent-return
export async function middleware() {
  const session = await auth();
  if (!session) {
    // 로그인 안했으면 돌아가거라
    return NextResponse.redirect('http://localhost:3000/i/flow/login');
  }
}

// 로그인 하지 않았을 때 해당 라우터들 접근 제한
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};
