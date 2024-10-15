export const TOKEN_FACTORY_ADDRESS =
  "0xc937DFD2F46491585c95Be743E0f7d43D97a72F4";

export const TOKEN_FACTORY_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxWalletSize",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "initialBuyTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finalBuyTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialSellTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finalSellTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reduceBuyTaxAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preventSwapBefore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "taxSwapThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTaxSwap",
            type: "uint256",
          },
        ],
        internalType: "struct CustomToken.TaxInfo",
        name: "taxInfo",
        type: "tuple",
      },
    ],
    name: "createToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const CUSTOM_TOKEN_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxTxAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxWalletSize_",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "initialBuyTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finalBuyTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialSellTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finalSellTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reduceBuyTaxAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preventSwapBefore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "taxSwapThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTaxSwap",
            type: "uint256",
          },
        ],
        internalType: "struct CustomToken.TaxInfo",
        name: "_taxInfo",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setMaxTxAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setMaxWalletSize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "initialBuyTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finalBuyTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialSellTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finalSellTax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reduceBuyTaxAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preventSwapBefore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "taxSwapThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTaxSwap",
            type: "uint256",
          },
        ],
        internalType: "struct CustomToken.TaxInfo",
        name: "_taxInfo",
        type: "tuple",
      },
    ],
    name: "setTaxInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "initialBuyTax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "finalBuyTax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialSellTax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "finalSellTax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reduceBuyTaxAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "preventSwapBefore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "taxSwapThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTaxSwap",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
