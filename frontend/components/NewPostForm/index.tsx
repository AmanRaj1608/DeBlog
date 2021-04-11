import React, { FormEvent, useState } from "react";

import { useRouter } from "next/router";
import styles from "./NewPostForm.module.scss";
import getContract from "../../utils/getContract";
import { useUser } from "../../context/UserContext";

const NewPostForm: React.FC = () => {
  const [content, setContent] = useState("");
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!content.length) {
      return;
    }

    setLoading(true);
    try {
      const contract = getContract(user.provider.getSigner());
      await contract.post(content, "");
      router.push("/");
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(
        `Exception in publishing new post ${
          err.message ? err.message : err.toString()
        }`
      );
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.formControl}>
        <h2 className={styles.title}>New Post</h2>
        <textarea
          cols={30}
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className={styles.formControl}>
        <button disabled={loading} type="submit">
          {loading ? "Publishing..." : "Upload"}
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
