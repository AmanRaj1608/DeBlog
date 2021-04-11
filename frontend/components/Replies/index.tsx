import React from "react";
import useReplies from "../../hooks/useReplies";
import { Post } from "../../types";
import ReplyItem from "../ReplyItem";

interface RepliesProps {
  id: string;
}

const Replies: React.FC<RepliesProps> = ({ id }) => {
  const replies = useReplies(id);

  return (
    <ul>
      {replies.map((reply: Post) => (
        <ReplyItem
          author={reply.author}
          content={reply.content}
          dislikes={reply.dislikes}
          likes={reply.likes}
          id={reply.id}
          publishedAtBlock={reply.publishedAtBlock}
          replyTo={reply.replyTo}
          key={reply.id}
        />
      ))}
    </ul>
  );
};

export default Replies;
