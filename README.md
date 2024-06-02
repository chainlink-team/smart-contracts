# PowerPlay Smart Contracts

This repository contains the smart contracts used in the PowerPlay platform.

### Roulette Contract

#### Uses Chainlink VRF and Chainlink Automation

The Roulette contract provides functionality for players to place bets, initiate the roulette spin, and receive payouts. The contract maintains a mapping of rollers, tracking who triggered each Chainlink VRF request. Chainlink VRF is integrated into the rollDice function, which requests a random number. The fulfillRandomness function is called automatically with the random result once it's ready. The payout logic is handled in fulfillRandomness. This European Roulette game covers all possible bet types (straight, split, street, corner, six line, column, dozen, red, black, high, low, even, odd), and the payout is calculated based on the respective odds of each win. Chainlink Automation is implemented when a user places a bet. The upKeep is triggered after the bet is placed to automatically roll the dice (spin the roulette wheel), calculate winnings, and withdraw them to the player's wallet.

### Slot Machine Contract

#### Uses Chainlink VRF and Chainlink Automation

The Slot Machine contract is a simple slot game where a user bets a certain amount of ether, and if they hit the jackpot (represented by a specific random number), they win a multiplier of their bet. Future improvements will include different winning combinations, varying rewards, and a house edge.

### DeFi Cross-Chain Lending

#### Uses Chainlink Data Feeds

The DeFi Cross-Chain Lending contract allows players to deposit MATIC as collateral on the Mumbai network or AVAX as collateral on the Fuji network to borrow LINK tokens. These lending contracts use Chainlink Data Feeds to fetch the latest price for each asset and calculate the maximum Loan-to-Value (LTV). The long-term vision for PowerPlay is to enable cross-chain gaming, allowing players to access any necessary assets for their chosen games. Future improvements will leverage Chainlink's CCIP for secure asset transfers, creating a robust lending protocol that allows gamers on both Polygon and Avalanche to seamlessly borrow assets cross-chain. This enhancement will enable players to access the resources they need without selling their assets.

### NFT Minting Contract

#### Uses Chainlink Functions and Data Feeds

The NFT Minting contract is central to the community/social aspect of PowerPlay, allowing each player to mint their own NFT using DALL-E3 (Open AI). The mint logic incorporates Chainlink Functions, where the smart contract calls our custom API and self-hosted IPFS server to generate AI-created images based on user-provided keywords for player NFT profile pictures.

## Deployed Contracts

All Contracts Tested, Deployed and Verfied: 
- **Polygon Amoy:** https://www.oklink.com/amoy/address/0x559e845af1b4da1139c2d5b33cd72a81bd1557cc/contract

- **Polygon Cardona:** https://cardona-zkevm.polygonscan.com/address/0x7D28aD92df4cDF6CA3ffD1E1d5c412800d7d6C76

- **Avalanche Fuji:** https://testnet.snowtrace.io/address/0x73610d151447Ebf8f86A49Ff003c1e22c4d47c80/contract/43113/code

- **Metis sepolia deployed:** https://sepolia-explorer.metisdevops.link/address/0x0175DD80dc6EEE9b5443E31036D184Ea895D74a9

- **Scroll sepolia Contract:** https://sepolia.scrollscan.com/address/0x7D28aD92df4cDF6CA3ffD1E1d5c412800d7d6C76
