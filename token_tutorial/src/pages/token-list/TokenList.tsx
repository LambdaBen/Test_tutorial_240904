import React, { useState } from "react";
import {
  useGetNativeBalanceByAccount,
  useGetTokensOwnedByAccount,
} from "../../utils/useQueries";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import OwnerInfo from "../../components/OwnerInfo";
import TokenTable from "../../components/TokenTable";

const TokenList = (): React.ReactElement => {
  const { accountAddress } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  if (!accountAddress) throw new Error("Check your account address");
  const {
    isError,
    data: getTokensOwnedByAccountData,
    isLoading,
  } = useGetTokensOwnedByAccount(accountAddress, currentPage);
  const {
    isError: isNativeError,
    data: nativeData,
    isLoading: isNativeLoading,
  } = useGetNativeBalanceByAccount(accountAddress);

  const handlePageChange = (page: number) => {
    setTimeout(() => {
      setCurrentPage(page);
    }, 400);
  };
  console.log("Test", getTokensOwnedByAccountData?.data);

  if (isLoading || isNativeLoading) return <div>Loading...</div>;

  if (isError || isNativeError) return <div>You have to connect node</div>;

  return (
    <div>
      <Header />
      <OwnerInfo
        accountAddress={accountAddress}
        nativeTokenData={nativeData?.data}
      />
      <TokenTable
        ownedTokensByAccountData={getTokensOwnedByAccountData?.data}
        accountAddress={accountAddress}
        onChangeHandle={handlePageChange}
      />
    </div>
  );
};

export default TokenList;
