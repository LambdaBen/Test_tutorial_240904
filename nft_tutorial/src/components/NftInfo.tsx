import React from "react";
import { NftInfoProps } from "../types/interface";
import { getImageUrl } from "../utils/functions";

const NftInfo: React.FC<NftInfoProps> = ({
  nftContractMetadata,
  accountAddress,
}) => {
  const originUrl = nftContractMetadata.media.originUrl;
  const cachedUrl = nftContractMetadata.media.cachedUrl;
  const imageUrl = getImageUrl(originUrl, cachedUrl);
  return (
    <>
      <div>
        {nftContractMetadata ? (
          <>
            <div className="mt-5 w-full p-3 shadow-xl shadow-black">
              <div className="text-2xl font-bold mb-5">Contract Metadata</div>
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <div>
                    <span className="font-bold">Contract Address</span> :{" "}
                    {nftContractMetadata.contract.address}
                  </div>
                  <div>
                    <span className="font-bold">Contract Name</span> :{" "}
                    {nftContractMetadata.contract.name}
                  </div>
                  <div>
                    <span className="font-bold">Contract Symbol</span> :{" "}
                    {nftContractMetadata.contract.symbol}
                  </div>
                  <div>
                    <span className="font-bold">NFT Type</span> :{" "}
                    {nftContractMetadata.contract.type}
                  </div>
                  <div>
                    <span className="font-bold">Contract DeployHash</span> :{" "}
                    {nftContractMetadata.contract.deployedTransactionHash}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 w-full p-3 shadow-xl shadow-black">
              <div className="text-2xl font-bold mt-5">NFT Info</div>
              <div className="flex flex-col items-center mt-3">
                {nftContractMetadata.media != null && imageUrl != null ? (
                  <img
                    className="w-72 h-72 rounded-full"
                    src={imageUrl}
                    alt="NFT Image"
                  />
                ) : (
                  <img
                    className="w-72 h-72 rounded-full"
                    src={"/nodit.svg"}
                    alt="Default Image"
                  />
                )}
                <div className="mt-4 text-center">
                  <div>
                    <span className="font-bold">Token Id</span> :{" "}
                    {nftContractMetadata.tokenId}
                  </div>
                  <div>
                    <span className="font-bold">Owner Address</span> :{" "}
                    {accountAddress}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default NftInfo;
