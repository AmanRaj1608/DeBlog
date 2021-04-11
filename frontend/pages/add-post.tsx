import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";
import NewPostForm from "../components/NewPostForm";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>DBlog | New Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.containerHead}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => router.push("/")}
          >
            Go back
          </button>
        </div>
        <NewPostForm />
      </div>
    </div>
  );
};

export default Home;
