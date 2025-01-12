import { faker } from '@faker-js/faker';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

import Image from 'next/image';

import { Post as IPost } from '@/model/Post';

import PostImages from '@/app/(afterLogin)/_component/PostImages';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import PostArticle from '@/app/(afterLogin)/_component/PostArticle';
import style from './styles/post.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  post: IPost;
  noImage?: boolean;
};
const Post = ({ noImage, post }: Props) => {
  const target = post;

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target?.User?.id}`} className={style.postUserImage}>
            <img src={`/img${target?.User?.image}`} alt={target?.User?.nickname ?? ''} />
            <span className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target?.User?.id}`}>
              <span className={style.postUserName}>{target?.User?.nickname}</span>
              &nbsp;
              <span>@{target?.User?.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target?.createdAt).fromNow(true)}</span>
          </div>
          <div>{target?.content}</div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
};

export default Post;
