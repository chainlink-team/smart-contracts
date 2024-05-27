require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    hardhat: {},
    polygonZkEVM: {
      url: "https://polygonzkevm-testnet.g.alchemy.com/v2/demo", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 1422, // Replace with the actual chain ID
    },
    polygonCardanoTestnet: {
      url: "https://rpc.cardona.zkevm-rpc.com", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 2442, // Replace with the actual chain ID
    },
    polygonAmoy: {
      url: "https://rpc-amoy.polygon.technology/", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 80002, // Replace with the actual chain ID
    },
    avalancheFuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [PRIVATE_KEY],
    },
    metis: {
      url: "https://andromeda.metis.io", // Replace with actual RPC URL
      accounts: [PRIVATE_KEY],
      chainId: 1088, // Replace with the actual chain ID
    },
    // zkSyncSepolia: {
    //   url: "wss://zksync-sepolia.drpc.org	", // Replace with actual RPC URL
    //   accounts: [PRIVATE_KEY],
    //   chainId: 300, // Replace with the actual chain ID
    // },
  },
  etherscan: {
    apiKey: {
      polygonAmoy: "713e704f-5a62-4a0f-b30f-9fc9d1001aa2",
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL:
            "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        },
      },
    ],
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
