import React, { useState } from "react";
import { ethers } from "ethers";
import { getTokenFactoryContract } from "../utils/contractUtils";

interface TokenFactoryProps {
  signer: ethers.Signer;
}

const TokenFactory: React.FC<TokenFactoryProps> = ({ signer }) => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [decimals, setDecimals] = useState("18");
  const [initialSupply, setInitialSupply] = useState("");
  const [maxTxAmount, setMaxTxAmount] = useState("");
  const [maxWalletSize, setMaxWalletSize] = useState("");
  const [taxInfo, setTaxInfo] = useState({
    initialBuyTax: "500",
    finalBuyTax: "100",
    initialSellTax: "500",
    finalSellTax: "100",
    reduceBuyTaxAt: "1000",
    preventSwapBefore: "100",
    taxSwapThreshold: "",
    maxTaxSwap: "",
  });

  const handleCreateToken = async () => {
    if (signer === null) {
      return alert("You must connect wallet first");
    }
    const factoryAddress = "0x1ec436B86A8ACC081746aD67fD1f00b7a504da75";
    const factory = getTokenFactoryContract(factoryAddress, signer);

    try {
      const tx = await factory.createToken(
        tokenName,
        tokenSymbol,
        decimals,
        initialSupply,
        ethers.utils.parseUnits(maxTxAmount, decimals),
        ethers.utils.parseUnits(maxWalletSize, decimals),
        {
          initialBuyTax: taxInfo.initialBuyTax,
          finalBuyTax: taxInfo.finalBuyTax,
          initialSellTax: taxInfo.initialSellTax,
          finalSellTax: taxInfo.finalSellTax,
          reduceBuyTaxAt: taxInfo.reduceBuyTaxAt,
          preventSwapBefore: taxInfo.preventSwapBefore,
          taxSwapThreshold: ethers.utils.parseUnits(
            taxInfo.taxSwapThreshold,
            decimals
          ),
          maxTaxSwap: ethers.utils.parseUnits(taxInfo.maxTaxSwap, decimals),
        }
      );

      const receipt = await tx.wait();
      const event = receipt.events?.find(
        (e: { event: string }) => e.event === "TokenCreated"
      );
      if (event) {
        const [tokenAddress] = event.args;
        console.log("New token created at:", tokenAddress);
        alert(`New token created at: ${tokenAddress}`);
      }
    } catch (error) {
      console.error("Error creating token:", error);
      alert("Error creating token. Check console for details.");
    }
  };

  return (
    <div className="flex flex-col text-black bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto bg-opacity-90 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Create New Token
      </h2>

      {/* Token Name */}
      <label className="mb-2 font-medium text-gray-700">Token Name</label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Token Name"
        value={tokenName}
        onChange={(e) => setTokenName(e.target.value)}
      />

      {/* Token Symbol */}
      <label className="mb-2 font-medium text-gray-700">Token Symbol</label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Token Symbol"
        value={tokenSymbol}
        onChange={(e) => setTokenSymbol(e.target.value)}
      />

      {/* Decimals */}
      <label className="mb-2 font-medium text-gray-700">Decimals</label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="Enter Decimals"
        value={decimals}
        onChange={(e) => setDecimals(e.target.value)}
      />

      {/* Initial Supply */}
      <label className="mb-2 font-medium text-gray-700">Initial Supply</label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Initial Supply"
        value={initialSupply}
        onChange={(e) => setInitialSupply(e.target.value)}
      />

      {/* Max Transaction Amount */}
      <label className="mb-2 font-medium text-gray-700">
        Max Transaction Amount
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Max Transaction Amount"
        value={maxTxAmount}
        onChange={(e) => setMaxTxAmount(e.target.value)}
      />

      {/* Max Wallet Size */}
      <label className="mb-2 font-medium text-gray-700">Max Wallet Size</label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Max Wallet Size"
        value={maxWalletSize}
        onChange={(e) => setMaxWalletSize(e.target.value)}
      />

      {/* Initial Buy Tax */}
      <label className="mb-2 font-medium text-gray-700">
        Initial Buy Tax (in basis points)
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Initial Buy Tax"
        value={taxInfo.initialBuyTax}
        onChange={(e) =>
          setTaxInfo({ ...taxInfo, initialBuyTax: e.target.value })
        }
      />

      {/* Final Buy Tax */}
      <label className="mb-2 font-medium text-gray-700">
        Final Buy Tax (in basis points)
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Final Buy Tax"
        value={taxInfo.finalBuyTax}
        onChange={(e) =>
          setTaxInfo({ ...taxInfo, finalBuyTax: e.target.value })
        }
      />

      {/* Initial Sell Tax */}
      <label className="mb-2 font-medium text-gray-700">
        Initial Sell Tax (in basis points)
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Initial Sell Tax"
        value={taxInfo.initialSellTax}
        onChange={(e) =>
          setTaxInfo({ ...taxInfo, initialSellTax: e.target.value })
        }
      />

      {/* Final Sell Tax */}
      <label className="mb-2 font-medium text-gray-700">
        Final Sell Tax (in basis points)
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Final Sell Tax"
        value={taxInfo.finalSellTax}
        onChange={(e) =>
          setTaxInfo({ ...taxInfo, finalSellTax: e.target.value })
        }
      />

      {/* Reduce Buy Tax At */}
      <label className="mb-2 font-medium text-gray-700">
        Reduce Buy Tax At (block number)
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Block Number"
        value={taxInfo.reduceBuyTaxAt}
        onChange={(e) =>
          setTaxInfo({ ...taxInfo, reduceBuyTaxAt: e.target.value })
        }
      />

      {/* Prevent Swap Before */}
      <label className="mb-2 font-medium text-gray-700">
        Prevent Swap Before (block number)
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Block Number"
        value={taxInfo.preventSwapBefore}
        onChange={(e) =>
          setTaxInfo({ ...taxInfo, preventSwapBefore: e.target.value })
        }
      />

      {/* Tax Swap Threshold */}
      <label className="mb-2 font-medium text-gray-700">
        Tax Swap Threshold
      </label>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Tax Swap Threshold"
        value={taxInfo.taxSwapThreshold}
        onChange={(e) =>
          setTaxInfo({ ...taxInfo, taxSwapThreshold: e.target.value })
        }
      />

      {/* Max Tax Swap */}
      <label className="mb-2 font-medium text-gray-700">Max Tax Swap</label>
      <input
        className="mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Max Tax Swap"
        value={taxInfo.maxTaxSwap}
        onChange={(e) => setTaxInfo({ ...taxInfo, maxTaxSwap: e.target.value })}
      />

      <button
        className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleCreateToken}
      >
        Create Token
      </button>
    </div>
  );
};

export default TokenFactory;
