// eslint-disable-next-line import/no-extraneous-dependencies
import { createMiddleware } from '@mswjs/http-middleware';
// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';

import { handlers } from './handlers';

/**
 * @description
 * next server 와 msw 가 매끄럽게 호환이 되지 않아
 * 임시 노드 서버를 활용합니다.
 * */

const app = express();
const port = 9090; // 실제 서버 포트 번호

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true })); // 클라이언트 포트 번호, credentials:  쿠키 인증 요청 허용
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
