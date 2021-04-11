import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider, Web3Provider } from "@ethersproject/providers";
import { ApolloProvider } from "@apollo/client";
import { BalanceContextProvider } from "../context/BalanceContext";
import { UserContextProvider } from "../context/UserContext";
import { client } from "../utils/graphql";
import "../styles/globals.scss";
import Login from "../components/Login";

const getLibrary = (provider: Provider): Web3Provider => {
  return new Web3Provider(provider as any); // this will vary according to whether you use e.g. ethers or web3.js
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <UserContextProvider>
        <BalanceContextProvider>
          <ApolloProvider client={client}>
            <Login />
            <Component {...pageProps} />
          </ApolloProvider>
        </BalanceContextProvider>
      </UserContextProvider>
    </Web3ReactProvider>
  );
};

export default MyApp;
