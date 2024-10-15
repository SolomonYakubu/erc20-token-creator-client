// src/utils/contractUtils.ts

import { ethers } from "ethers";
import { TOKEN_FACTORY_ABI, CUSTOM_TOKEN_ABI } from "../contractConfig";
const tokenFactoryABI = TOKEN_FACTORY_ABI;

const customTokenABI = CUSTOM_TOKEN_ABI;

export const getTokenFactoryContract = (
  address: string,
  signer: ethers.Signer
) => {
  return new ethers.Contract(address, tokenFactoryABI, signer);
};

export const getCustomTokenContract = (
  address: string,
  signer: ethers.Signer
) => {
  return new ethers.Contract(address, customTokenABI, signer);
};

export const connectWallet = async (): Promise<ethers.Signer | null> => {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      return provider.getSigner();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      return null;
    }
  } else {
    console.log("Please install MetaMask!");
    return null;
  }
};
