'use client';

import { useContext, useState } from 'react';

import style from './styles/tab.module.css';
import { TabContext } from '@/app/(afterLogin)/home/_component/TabProvider';

const Tab = () => {
  const { tab, setTab } = useContext(TabContext);
  const onClickRec = () => {
    setTab('rec');
  };
  const onClickFol = () => {
    setTab('fol');
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <button type='button' onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === 'fol'} />
        </button>
        <button type='button' onClick={onClickFol}>
          팔로우 중<div className={style.tabIndicator} hidden={tab === 'rec'} />
        </button>
      </div>
    </div>
  );
};

export default Tab;
