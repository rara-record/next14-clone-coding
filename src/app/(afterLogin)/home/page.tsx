import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import TabDecider from '@/app/(afterLogin)/home/_component/TabDecider';

const Home = async () => {
  const queryClient: QueryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
};

export default Home;
