'use client';

import { useQuery } from '@tanstack/react-query';

import { Post as IPost } from '@/model/Post';

import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import Post from '@/app/(afterLogin)/_component/Post';

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post post={post} key={post.id} />);
}
