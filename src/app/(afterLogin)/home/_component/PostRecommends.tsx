'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Post as IPost } from '@/model/Post';

import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import Post from '@/app/(afterLogin)/_component/Post';

const PostRecommends = () => {
  const { data } = useQuery<IPost[]>({ queryKey: ['posts', 'recommends'], queryFn: getPostRecommends });
  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
};

export default PostRecommends;
