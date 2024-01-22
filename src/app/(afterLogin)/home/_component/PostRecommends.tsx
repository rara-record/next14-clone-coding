'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Post as IPost } from '@/model/Post';

import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import Post from '@/app/(afterLogin)/_component/Post';

const PostRecommends = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // 1분동안은 항상 fresh (캐시 된 데이터)
    gcTime: 300 * 1000,
  });
  return data ? data.map((post: IPost) => <Post key={post.postId} post={post} />) : null;
};

export default PostRecommends;
