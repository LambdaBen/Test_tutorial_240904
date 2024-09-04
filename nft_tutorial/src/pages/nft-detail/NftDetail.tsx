import React, { useEffect, useState } from "react";
import {
  useGetNFTMetadataByTokenIds,
  UseGetNftTransfersByTokenId,
} from "../../utils/useQuery";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import NftInfo from "../../components/NftInfo";
import TransferTable from "../../components/TransferTable";

const NftDetail = (): React.ReactElement => {
  const [isTransferDataEnabled, setIsTransferDataEnabled] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { accountAddress, contractAddress, tokenId } = useParams();
  if (!contractAddress || !tokenId || !accountAddress)
    throw new Error("Check your contract address and token ID");

  console.log(contractAddress, tokenId);
  const {
    data: nftMetadataByTokenIdsData,
    isLoading,
    isError,
  } = useGetNFTMetadataByTokenIds(contractAddress, tokenId);

  const {
    data: nftTransfersByTokenIdData,
    isLoading: getNftTransfersByTokenIdIsLoading,
    isError: getNftTransfersByTokenIdIsError,
  } = UseGetNftTransfersByTokenId(
    contractAddress,
    tokenId,
    isTransferDataEnabled
  );

  const nftMetadataByTokenIdsPropsData = nftMetadataByTokenIdsData?.data[0];
  const nftTransfersByTokenIdPropsData = nftTransfersByTokenIdData?.data.items;

  useEffect(() => {
    if (nftMetadataByTokenIdsData) {
      const timeout = setTimeout(() => {
        setIsTransferDataEnabled(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [nftMetadataByTokenIdsData]);

  useEffect(() => {
    if (isLoading || getNftTransfersByTokenIdIsLoading) {
      setIsFetching(true);
    } else {
      setIsFetching(false);
    }
  }, [isLoading, getNftTransfersByTokenIdIsLoading]);

  if (isFetching) return <div>Loading...</div>;
  if (isError || getNftTransfersByTokenIdIsError)
    return <div>Please refresh this page.</div>;
  return (
    <>
      <Header />
      {nftMetadataByTokenIdsPropsData && nftTransfersByTokenIdPropsData ? (
        <div>
          <NftInfo
            nftContractMetadata={nftMetadataByTokenIdsPropsData}
            accountAddress={accountAddress}
          />
          <TransferTable nftTransferData={nftTransfersByTokenIdPropsData} />
        </div>
      ) : null}
    </>
  );
};

export default NftDetail;
