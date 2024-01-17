import { auth } from './auth'
import { NextResponse } from 'next/server'

export async function middleware() {
  const session = await auth()
  if (!session) {
    // 로그인 안했으면 돌아가거라
    return NextResponse.redirect('http://localhost:3000/i/flow/login')
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}
