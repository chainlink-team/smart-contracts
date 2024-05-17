require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    polygonZkEVM: {
      url: "", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 0, // Replace with the actual chain ID
    },
    polygonCardanoTestnet: {
      url: "", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 0, // Replace with the actual chain ID
    },
    polygonPOS_Amoy: {
      url: "", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 0, // Replace with the actual chain ID
    },
    avalancheFuji: {
      url: "",
      accounts: [PRIVATE_KEY],
      chainId: 0,
    },
    scrollSepolia: {
      url: "", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 0, // Replace with the actual chain ID
    },
    metis: {
      url: "", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 0, // Replace with the actual chain ID
    },
    zkSyncSepolia: {
      url: "", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 0, // Replace with the actual chain ID
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
