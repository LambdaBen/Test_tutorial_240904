import React from "react";
import { ContractInfoProps } from "../types/interface";

const ContractInfo: React.FC<ContractInfoProps> = ({ contractMetadata }) => {
  return (
    <div className="mt-10 w-full justify-between p-3 shadow-xl shadow-black">
      {contractMetadata ? (
        <>
          <div className="text-2xl font-bold mb-5 text-center">
            Contract Metadata
          </div>
          <div className="flex items-center justify-center">
            <div className="text-left">
              <div>
                <span className="font-bold">Contract Address</span> :
                {contractMetadata.address}
              </div>
              <div>
                <span className="font-bold">Token Name</span> :
                {contractMetadata.name}
              </div>
              <div>
                <span className="font-bold">Token Symbol</span> :
                {contractMetadata.symbol}
              </div>
              <div>
                <span className="font-bold">Token TotalSupply</span> :
                {contractMetadata.totalSupply}
              </div>
              <div>
                <span className="font-bold">Token Decimals</span> :
                {contractMetadata.decimals}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ContractInfo;
