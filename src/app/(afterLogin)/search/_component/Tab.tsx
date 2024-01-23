'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import style from '../search.module.css';

const Tab = () => {
  const [current, setCurrent] = useState('hot');
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent('hot');
    router.replace(`/search?q=${searchParams.get('q')}`);
  };
  const onClickNew = () => {
    setCurrent('new');
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <button type='button' onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === 'new'} />
        </button>
        <button type='button' onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === 'hot'} />
        </button>
      </div>
    </div>
  );
};

export default Tab;
