import React, { useState } from "react";
import { useGetNFTsOwnedByAccount } from "../../utils/useQuery";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import OwnerInfo from "../../components/OwnerInfo";
import NftTable from "../../components/NftTable";

const NftList = (): React.ReactElement => {
  const { accountAddress } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  if (!accountAddress) throw new Error("Check your account address");
  const {
    isError,
    data: ownedNftData,
    isLoading,
  } = useGetNFTsOwnedByAccount(accountAddress, currentPage);

  const handlePageChange = (page: number) => {
    setTimeout(() => {
      setCurrentPage(page);
    }, 400);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>You have to connect node</div>;

  return (
    <div>
      <Header />
      <OwnerInfo accountAddress={accountAddress} />
      <NftTable
        ownedNftsByAccountData={ownedNftData?.data}
        accountAddress={accountAddress}
        onChangeHandle={handlePageChange}
      />
    </div>
  );
};

export default NftList;
