'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import style from './styles/logoutButton.module.css';

const LogoutButton = () => {
  const router = useRouter();
  const { data } = useSession();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };

  if (!data) return null;

  return (
    <button type='button' className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={`img/${data.user?.image as string}`} alt={data.user?.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{data.user?.name}</div>
        <div>@{data.user?.id}</div>
      </div>
    </button>
  );
};

export default LogoutButton;
