require("@nomicfoundation/hardhat-toolbox")
require("hardhat-contract-sizer")
require("@openzeppelin/hardhat-upgrades")
require("./tasks")
require("@chainlink/env-enc").config()
const { networks } = require("./networks")

// Enable gas reporting (optional)
require("dotenv").config();

const REPORT_GAS = process.env.REPORT_GAS?.toLowerCase() === "true" ? true : false

const { PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    polygonZkEVM: {
      url: "https://polygonzkevm-testnet.g.alchemy.com/v2/demo", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 1422, // Replace with the actual chain ID
    },
    polygonCardanoTestnet: {
      url: "https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 2442, // Replace with the actual chain ID
    },
    polygonPOS_Amoy: {
      url: "https://rpc-amoy.polygon.technology/", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 80002, // Replace with the actual chain ID
    },
    avalancheFuji: {
      url: "wss://avalanche-fuji-c-chain-rpc.publicnode.com",
      accounts: [PRIVATE_KEY],
      chainId: 43113,
    },
    scrollSepolia: {
      url: "https://scroll-sepolia.blockpi.network/v1/rpc/public", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 534351, // Replace with the actual chain ID
    },
    // metis: {
    //   url: "", // Replace with actual RPC URL
    //   accounts: [PRIVATE_KEY],
    //   chainId: 0, // Replace with the actual chain ID
    // },
    zkSyncSepolia: {
      url: "wss://zksync-sepolia.drpc.org	", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 300, // Replace with the actual chain ID
    },
  },
  etherscan: {
    apiKey: {},
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
