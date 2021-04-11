import { useWeb3React } from "@web3-react/core";
import { useLogin, useUser } from "../../context/UserContext";
import handleConnetionError from "../../utils/handleConnectionError";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const login = useLogin();
  const user = useUser();
  const { chainId, error } = useWeb3React();

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (error) {
    return <div className={styles.login}>{handleConnetionError(error)}</div>;
  }
  if (user) {
    return (
      <header className={styles.login}>
        <img src="/logo.svg" alt="logo" className={styles.logo} />
        <div className={styles.address}>{truncateAddress(user.address)}</div>
      </header>
    );
  }
  return (
    <header className={styles.login}>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
      <button type="button" onClick={() => login()}>
        Login with Metamask
      </button>
    </header>
  );
};
export default Login;
