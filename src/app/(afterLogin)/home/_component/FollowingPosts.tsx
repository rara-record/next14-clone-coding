'use client';

import { useQuery } from '@tanstack/react-query';

import { Post as IPost } from '@/model/Post';

import { getFollowingPosts } from '@/app/(afterLogin)/home/_lib/getFollowingPosts';
import Post from '@/app/(afterLogin)/_component/Post';

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  console.log(data, 'follow');

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
