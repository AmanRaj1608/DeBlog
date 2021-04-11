import Head from "next/head";
import { useRouter } from "next/router";
import usePosts from "../hooks/usePosts";
import styles from "../styles/Home.module.scss";
import PostItem from "../components/PostItem";
import { useUser } from "../context/UserContext";

const Home: React.FC = () => {
  const router = useRouter();
  const posts = usePosts();
  const user = useUser();

  return (
    <main>
      <Head>
        <title>Decentralised blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.containerHead}>
          <button
            type="button"
            className={styles.btn}
            disabled={!user}
            onClick={() => router.push("/add-post")}
          >
            + Add New
          </button>
        </div>
        <ul>
          {posts.map((post) => (
            <PostItem
              key={post.id}
              author={post.author}
              content={post.content}
              id={post.id}
              replyTo={post.replyTo}
              likes={post.likes}
              dislikes={post.dislikes}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
