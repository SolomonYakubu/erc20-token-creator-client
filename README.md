# ERC20 Token Creator

This project allows users to create their own customizable ERC20 tokens on the Ethereum blockchain using a simple web interface. It consists of two main parts: a smart contract deployed on the Ethereum network and a Next.js frontend application.

## Smart Contract

The smart contract for this project can be found at the following GitHub repository:

[https://github.com/SolomonYakubu/erc20-token-creator](https://github.com/SolomonYakubu/erc20-token-creator)

## Frontend Application

The frontend is built using Next.js and Tailwind CSS, providing a modern and responsive user interface for interacting with the ERC20 token creation smart contract.

### Technologies Used

- Next.js 14.2.13
- React 18
- Tailwind CSS 3.4.1
- Ethers.js 5.7.2
- Web3-React 8.2.3

### Key Features

The TokenFactory component allows users to create custom ERC20 tokens with the following features:

1. Set basic token properties:
   - Token Name
   - Token Symbol
   - Decimals
   - Initial Supply
2. Configure transaction limits:
   - Max Transaction Amount
   - Max Wallet Size
3. Implement dynamic tax system:
   - Initial and Final Buy Tax
   - Initial and Final Sell Tax
   - Tax reduction trigger (block number)
4. Control token swaps:
   - Prevent swaps before a specific block number
   - Set Tax Swap Threshold
   - Set Max Tax Swap amount

### Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file in the root directory with the following variables:
   ```
   INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_private_key
   ETHERSCAN_API=your_etherscan_api_key
   ```
   Replace the placeholder values with your actual credentials.

### Running the Application

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```
npm run build
```

Then start the production server:

```
npm start
```

## Usage

1. Connect your Web3 wallet (e.g., MetaMask) to the application.
2. Fill in the token creation form with your desired parameters.
3. Click the "Create Token" button to deploy your custom ERC20 token.
4. Once the transaction is confirmed, you'll receive the address of your newly created token.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
