'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import style from './styles/rightSearchZone.module.css';
import SearchForm from '@/app/(afterLogin)/_component/SearchForm';

const RightSearchZone = () => {
  const pathname = usePathname();
  const onChangeFollow = () => {};
  const onChangeAll = () => {};
  if (pathname === '/explore') {
    return null;
  }
  if (pathname === '/search') {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label htmlFor='pf'>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input type='radio' name='pf' defaultChecked onChange={onChangeAll} />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input type='radio' name='pf' value='on' onChange={onChangeFollow} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: 'inherit' }}>
      <SearchForm />
    </div>
  );
};

export default RightSearchZone;
