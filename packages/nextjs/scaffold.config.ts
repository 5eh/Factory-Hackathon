import * as chains from "viem/chains";
import { BLOCKCHAIN_NETWORK } from "~~/../../configuration/blockchain";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const scaffoldConfig: ScaffoldConfig = {
  // The networks on which your DApp is live
  targetNetworks: [chains.opBNBTestnet],

  pollingInterval: 30000,

  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  onlyLocalBurnerWallet: true,
};

export default scaffoldConfig;
