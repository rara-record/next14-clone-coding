import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import TabDecider from '@/app/(afterLogin)/home/_component/TabDecider';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';

export default async function TabDeciderSuspense() {
  return <HydrationBoundary />;
}
