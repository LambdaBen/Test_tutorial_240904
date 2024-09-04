import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetTokenContractMetadataByContracts,
  useGetTokenTransfersByContract,
} from "../../utils/useQueries";
import Header from "../../components/Header";
import ContractInfo from "../../components/ContractInfo";
import TransferTable from "../../components/TransferTable";

const TokenDetail = (): React.ReactElement => {
  const [isFetching, setIsFetching] = useState(false);
  const [isTransferDataEnabled, setIsTransferDataEnabled] = useState(false);
  const { accountAddress, contractAddress } = useParams();
  if (!accountAddress || !contractAddress)
    throw new Error("Check your Account Address and Contract Address.");

  const {
    data: contractMetadataData,
    isLoading: isContractMetadataIsLoading,
    isError: contractMetadataIsError,
  } = useGetTokenContractMetadataByContracts(contractAddress);

  const {
    data: transferData,
    isLoading: isTransferLoading,
    isError: isTransferError,
  } = useGetTokenTransfersByContract(contractAddress, isTransferDataEnabled);

  useEffect(() => {
    if (contractMetadataData) {
      const timeout = setTimeout(() => {
        setIsTransferDataEnabled(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [contractMetadataData]);

  useEffect(() => {
    if (isContractMetadataIsLoading || isTransferLoading) {
      setIsFetching(true);
    } else {
      setIsFetching(false);
    }
  }, [isContractMetadataIsLoading, isTransferLoading]);

  if (isFetching) return <div>Loading...</div>;

  if (contractMetadataIsError || isTransferError)
    return <div>Please refresh the page.</div>;
  return (
    <>
      {contractMetadataData && transferData && !isFetching ? (
        <div>
          <Header />
          <ContractInfo contractMetadata={contractMetadataData.data[0]} />

          <TransferTable transferData={transferData.data} />
        </div>
      ) : null}
    </>
  );
};
export default TokenDetail;
