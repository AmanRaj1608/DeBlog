import { Address } from "@graphprotocol/graph-ts";
import {
  Like as LikeEvent,
  Dislike as DislikeEvent,
  Post as PostEvent,
} from "../generated/DBlog/DBlog";
import { Post, Like, Dislike } from "../generated/schema";

const fromEventToId = (from: Address, postId: string): string =>
  from.toHex() + "-" + postId;

export function handleNewPost(event: PostEvent): void {
  let id = event.transaction.hash.toHex();
  let post = new Post(id);
  post.likes = 0;
  post.dislikes = 0;
  post.author = event.transaction.from;
  post.content = event.params.content;
  post.replyTo = event.params.replyTo;
  post.publishedAtBlock = event.block.number;
  post.save();
}

export function handleLike(event: LikeEvent): void {
  let post = Post.load(event.params.postId);

  let likeId = fromEventToId(event.transaction.from, event.params.postId);
  let previous = Like.load(likeId);
  if (!previous) {
    post.likes += 1;
    post.save();
  }

  let like = new Like(likeId);
  like.author = event.transaction.from;
  like.post = event.params.postId;
  like.save();
}

export function handleDislike(event: DislikeEvent): void {
  let post = Post.load(event.params.postId);

  let dislikeId = fromEventToId(event.transaction.from, event.params.postId);
  let previous = Dislike.load(dislikeId);
  if (!previous) {
    post.dislikes += 1;
    post.save();
  }

  let dislike = new Dislike(dislikeId);
  dislike.author = event.transaction.from;
  dislike.post = event.params.postId;
  dislike.save();
}
