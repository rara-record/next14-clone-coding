import React from 'react';
import {NextPage} from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      404: Not
      <Link  href="(afterLogin)/search">검색</Link>
    </div>
  );
}

export default NotFound;
