// src/App.tsx
"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { connectWallet } from "../utils/contractUtils";
import TokenFactory from "../components/TokenFactory";
import TokenInteraction from "../components/TokenInteraction";

const App: React.FC = () => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      const connectedSigner = await connectWallet();
      setSigner(connectedSigner);
      if (connectedSigner) {
        const connectedAddress = await connectedSigner.getAddress();
        setAddress(connectedAddress);
      }
    };
    init();
  }, []);

  return (
    <div
      className=" p-5 px-6"
      style={{
        background:
          "url(https://wallup.net/wp-content/uploads/2016/01/288504-colorful-pattern-abstract-square-digital_art-lines.jpg)",
          backgroundSize: "contain",
      }}
    >
      <div className="flex justify-between items-center p-4 px-8 bg-black my-4 rounded-lg ">
        <h1 className="text-lg font-bold">Token Creator</h1>
        {(signer && (
          <div>
            <p>Connected Address: {address}</p>
          </div>
        )) || (
          <button
            className="bg-blue-600 p-3 rounded-lg"
            onClick={async () => setSigner(await connectWallet())}
          >
            Connect Wallet
          </button>
        )}
      </div>
      <>
        <div className="flex flex-col md:flex-row justify-center items-start gap-5 w-full">
          <TokenFactory signer={signer!} />
          <TokenInteraction signer={signer!} />
        </div>
      </>
    </div>
  );
};

export default App;
