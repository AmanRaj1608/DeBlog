export interface Post {
  id: string;
  publishedAtBlock: string;
  author: string;
  content: string;
  replyTo: string;
  likes: number;
  dislikes: number;
}
