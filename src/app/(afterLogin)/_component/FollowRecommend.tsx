'use client';

import style from './styles/followRecommend.module.css';

const FollowRecommend = () => {
  const onFollow = () => {};

  const user = {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image: '/yRsRRjGO.jpg',
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.userLogo}>
          <img src={`img/${user.image}`} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button type='button' onClick={onFollow}>
          팔로우
        </button>
      </div>
    </div>
  );
};

export default FollowRecommend;
