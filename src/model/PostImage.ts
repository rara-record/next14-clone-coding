// eslint-disable-next-line import/no-cycle
import { Post } from './Post';

export interface PostImage {
  link: string;
  imageId: number;
  Post?: Post;
}
