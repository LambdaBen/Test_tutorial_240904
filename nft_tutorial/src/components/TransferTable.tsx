import React from "react";
import { NftTransferResponse, TransferTableProps } from "../types/interface";

const TransferTable: React.FC<TransferTableProps> = ({ nftTransferData }) => {
  const getNftTransferData = nftTransferData?.map(
    (item: NftTransferResponse) => {
      return {
        from: item.from,
        to: item.to,
        value: item.value,
        transactionHash: item.transactionHash,
      };
    }
  );
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-5 text-2xl font-bold">Latest Transfer History</div>
      <div className="w-full overflow-x-auto">
        <table className="w-full max-w-lg table-auto border-collapse mt-5 mb-10 shadow-xl shadow-black ">
          <thead>
            <tr className="border-2 border-noditGreen bg-noditGreen text-white ">
              <th className="p-2">Number</th>
              <th className="p-2">From</th>
              <th className="p-2">To</th>
              <th className="p-2">Value</th>
              <th className="p-2">TransactionHash</th>
            </tr>
          </thead>
          <tbody>
            {getNftTransferData
              ? getNftTransferData.map(
                  (item: NftTransferResponse, index: number) => (
                    <tr
                      key={index + item.transactionHash}
                      className="border border-noditGreen hover:scale-105 duration-100 cursor-pointer"
                    >
                      <th className="font-bold p-2">{index + 1} </th>
                      <th className="font-light p-2">{item.from} </th>
                      <th className="font-light p-2">{item.to} </th>
                      <th className="font-light p-2">{item.value}</th>
                      <th className="font-light p-2">{item.transactionHash}</th>
                    </tr>
                  )
                )
              : null}
          </tbody>
        </table>
      </div>
      {getNftTransferData ? (
        <>
          <a
            href="https://developer.nodit.io/reference/getnfttransfersbyaccount"
            className="font-bold text-xl m-10"
          >
            👉 If you want to know more about NFT Transfer API? Then, please
            click here 👈
          </a>
        </>
      ) : null}
    </div>
  );
};

export default TransferTable;
