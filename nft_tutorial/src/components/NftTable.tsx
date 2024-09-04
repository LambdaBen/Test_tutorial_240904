import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NftListTableProps,
  NftsOwnedByAccountResponse,
} from "../types/interface";
import Pagination from "react-js-pagination";

const NftTable: React.FC<NftListTableProps> = ({
  ownedNftsByAccountData,
  accountAddress,
  onChangeHandle,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 text-2xl font-bold">NFT List</div>
      {ownedNftsByAccountData && ownedNftsByAccountData.items.length > 0 ? (
        <div>
          <table className="w-full max-w-7xl table-fixed border-collapse mt-5 mb-10 shadow-xl shadow-black">
            <thead>
              <tr className="border-2 border-noditGreen bg-noditGreen text-white">
                <th className="pl-5">Number</th>
                <th className="p-5">Name</th>
                <th className="p-5">Symbol</th>
                <th className="pr-5">Token Id</th>
              </tr>
            </thead>
            <tbody>
              {ownedNftsByAccountData.items.map(
                (item: NftsOwnedByAccountResponse, index: number) => (
                  <tr
                    key={index + item.contract.deployedTransactionHash}
                    className="border border-noditGreen hover:scale-105 duration-100 cursor-pointer"
                    onClick={() => {
                      navigate(
                        `/nfts/${accountAddress}/${item.contract.address}/${item.tokenId}`
                      );
                    }}
                  >
                    <th className="font-bold p-5">
                      {ownedNftsByAccountData.page === 1
                        ? index + 1
                        : ownedNftsByAccountData.page * 20 + index - 19}
                    </th>
                    <th className="font-light p-5">{item.contract.name}</th>
                    <th className="font-light p-5">{item.contract.symbol}</th>
                    <th className="font-light p-5">
                      {item.tokenId.length < 10
                        ? item.tokenId
                        : item.tokenId.slice(0, 10) + "..."}
                    </th>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="mb-10">
            <Pagination
              activePage={ownedNftsByAccountData.page}
              itemsCountPerPage={ownedNftsByAccountData.rpp}
              totalItemsCount={ownedNftsByAccountData.count}
              pageRangeDisplayed={10}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={onChangeHandle}
            />
          </div>
        </div>
      ) : (
        <div>This Account doesn't have any NFTs</div>
      )}
    </div>
  );
};

export default NftTable;
