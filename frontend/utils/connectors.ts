import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 13000;
const RPC_URLS: { [chainId: number]: string } = {
  80001: process.env.NEXT_PUBLIC_MUMBAI_RPC_URL,
};

export const injected = new InjectedConnector({
  supportedChainIds: [80001],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 80001: RPC_URLS[80001] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
