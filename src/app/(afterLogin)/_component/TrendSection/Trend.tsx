import Link from 'next/link';

import style from '../styles/trend.module.css';

const Trend = () => {
  return (
    <Link href='/search?q=트렌드' className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>제로초</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  );
};

export default Trend;
