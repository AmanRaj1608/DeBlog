import React, { useEffect, useState } from "react";
import { Post } from "../../types";
import getContract from "../../utils/getContract";
import styles from "./RepyItem.module.scss";
import { useUser } from "../../context/UserContext";

const ReplyItem: React.FC<Post> = ({
  author,
  content,
  dislikes,
  likes,
  id,
}) => {
  const user = useUser();
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  useEffect(() => {
    setLikesCount(likes);
    setDislikesCount(dislikes);
  }, [likes, dislikes]);

  const handleRating = async (type: "like" | "dislike") => {
    const contract = getContract(user.provider.getSigner());

    if (type === "like") {
      await contract.like(id);
      setLikesCount((oldLikes) => oldLikes + 1);
    }

    if (type === "dislike") {
      await contract.dislike(id);
      setDislikesCount((oldLikes) => oldLikes + 1);
    }
  };

  return (
    <li className={styles.reply}>
      <div className={styles.main}>
        <span>By: {author}</span>
        <p>{content}</p>
      </div>
      <div className={styles.rating}>
        <button
          type="button"
          disabled={!user}
          className={styles.btn}
          onClick={() => handleRating("like")}
        >
          <span>Upvotes: {likesCount}</span>
        </button>
        <button
          type="button"
          disabled={!user}
          className={styles.btn}
          onClick={() => handleRating("dislike")}
        >
          <span>Downvotes: {dislikesCount}</span>
        </button>
      </div>
    </li>
  );
};

export default ReplyItem;
