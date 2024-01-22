// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg' },
  { id: 'leoturtle', nickname: '레오', image: faker.image.avatar() },
];
const Posts = [];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
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
      },
    );
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0', // 값을 넣지 않을 때
      },
    });
  }),
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  http.get('/api/postRecommends', async ({ request }) => {
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
];
