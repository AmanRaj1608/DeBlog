import Head from "next/head";
import { useRouter } from "next/router";
import ReplyForm from "../../components/ReplyForm";
import Replies from "../../components/Replies";
import usePost from "../../hooks/usePost";
import styles from "../../styles/Home.module.scss";

const SinglePostPage: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const post = usePost(postId as string);

  if (!postId) return <>404</>;

  return (
    <>
      <Head>
        <title>DBlog | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => router.back()}
        >
          Back
        </button>
        <div className={styles.singlePost}>
          <div className={styles.by}>
            By: {post?.author} - At block: {post?.publishedAtBlock}
          </div>
          <p>{post?.content}</p>
        </div>
        <hr />
        <div>
          <ReplyForm id={postId as string} />
        </div>
        <hr />
        <div>
          <Replies id={postId as string} />
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;
