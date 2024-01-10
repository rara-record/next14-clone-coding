import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인')
    return HttpResponse.json(
      {
        id: 'bora',
        nickname: 'KIMBORA',
        image: '/yRsRRjGO.jpg',
      },
      {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/', // HTTP header 로 쿠키 설정하는 방법. 값을 넣어줄 때
        },
      }
    )
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃')
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0', // 값을 넣지 않을 때
      },
    })
  }),
]
