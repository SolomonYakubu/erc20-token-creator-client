/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { ethers } from "ethers";
import { getCustomTokenContract } from "../utils/contractUtils";

interface TokenInteractionProps {
  signer: ethers.Signer;
}

const TokenInteraction: React.FC<TokenInteractionProps> = ({ signer }) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenInfo, setTokenInfo] = useState<any>(null);
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  const handleFetchTokenInfo = async () => {
    if (signer == null) {
      return alert("You must connect wallet first");
    }
    try {
      const token = getCustomTokenContract(tokenAddress, signer);
      const name = await token.name();
      const symbol = await token.symbol();
      const decimals = await token.decimals();
      const totalSupply = await token.totalSupply();
      const signerAddress = await signer.getAddress();
      const balance = await token.balanceOf(signerAddress);
      const taxInfo = await token.taxInfo();

      setTokenInfo({
        name,
        symbol,
        decimals,
        totalSupply: ethers.utils.formatUnits(totalSupply, decimals),
        balance: ethers.utils.formatUnits(balance, decimals),
        taxInfo: {
          initialBuyTax: taxInfo.initialBuyTax.toString(),
          finalBuyTax: taxInfo.finalBuyTax.toString(),
          initialSellTax: taxInfo.initialSellTax.toString(),
          finalSellTax: taxInfo.finalSellTax.toString(),
          reduceBuyTaxAt: taxInfo.reduceBuyTaxAt.toString(),
          preventSwapBefore: taxInfo.preventSwapBefore.toString(),
          taxSwapThreshold: ethers.utils.formatUnits(
            taxInfo.taxSwapThreshold,
            decimals
          ),
          maxTaxSwap: ethers.utils.formatUnits(taxInfo.maxTaxSwap, decimals),
        },
      });
    } catch (error) {
      console.error("Error fetching token info:", error);
      alert("Error fetching token info. Check console for details.");
    }
  };

  const handleTransfer = async () => {
    try {
      const token = getCustomTokenContract(tokenAddress, signer);
      const decimals = await token.decimals();
      const tx = await token.transfer(
        transferTo,
        ethers.utils.parseUnits(transferAmount, decimals)
      );
      await tx.wait();
      alert("Transfer successful!");
      handleFetchTokenInfo(); // Refresh token info after transfer
    } catch (error) {
      console.error("Error transferring tokens:", error);
      alert("Error transferring tokens. Check console for details.");
    }
  };

  return (
    <div className="flex flex-col text-black bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto bg-opacity-90 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Interact with Existing Token
      </h2>

      {/* Token Address */}
      <label className="mb-2 font-medium text-gray-700">Token Address</label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Token Address"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
      />

      <button
        className="mb-6 w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleFetchTokenInfo}
      >
        Fetch Token Info
      </button>

      {tokenInfo && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Token Info</h3>
          <p>
            <span className="font-medium">Name:</span> {tokenInfo.name}
          </p>
          <p>
            <span className="font-medium">Symbol:</span> {tokenInfo.symbol}
          </p>
          <p>
            <span className="font-medium">Decimals:</span> {tokenInfo.decimals}
          </p>
          <p>
            <span className="font-medium">Total Supply:</span>{" "}
            {tokenInfo.totalSupply}
          </p>
          <p>
            <span className="font-medium">Your Balance:</span>{" "}
            {tokenInfo.balance}
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Tax Info</h4>
          <p>
            <span className="font-medium">Initial Buy Tax:</span>{" "}
            {tokenInfo.taxInfo.initialBuyTax} basis points
          </p>
          <p>
            <span className="font-medium">Final Buy Tax:</span>{" "}
            {tokenInfo.taxInfo.finalBuyTax} basis points
          </p>
          <p>
            <span className="font-medium">Initial Sell Tax:</span>{" "}
            {tokenInfo.taxInfo.initialSellTax} basis points
          </p>
          <p>
            <span className="font-medium">Final Sell Tax:</span>{" "}
            {tokenInfo.taxInfo.finalSellTax} basis points
          </p>
          <p>
            <span className="font-medium">Reduce Buy Tax At:</span> Block{" "}
            {tokenInfo.taxInfo.reduceBuyTaxAt}
          </p>
          <p>
            <span className="font-medium">Prevent Swap Before:</span> Block{" "}
            {tokenInfo.taxInfo.preventSwapBefore}
          </p>
          <p>
            <span className="font-medium">Tax Swap Threshold:</span>{" "}
            {tokenInfo.taxInfo.taxSwapThreshold}
          </p>
          <p>
            <span className="font-medium">Max Tax Swap:</span>{" "}
            {tokenInfo.taxInfo.maxTaxSwap}
          </p>
        </div>
      )}

      <h3 className="text-xl font-semibold mb-4">Transfer Tokens</h3>

      {/* Recipient Address */}
      <label className="mb-2 font-medium text-gray-700">
        Recipient Address
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Recipient Address"
        value={transferTo}
        onChange={(e) => setTransferTo(e.target.value)}
      />

      {/* Transfer Amount */}
      <label className="mb-2 font-medium text-gray-700">Amount</label>
      <input
        className="mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Amount"
        value={transferAmount}
        onChange={(e) => setTransferAmount(e.target.value)}
      />

      <button
        className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleTransfer}
      >
        Transfer
      </button>
    </div>
  );
};

export default TokenInteraction;
