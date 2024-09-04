import React from "react";
import {
  ContractTokenTransferResponse,
  TransferTableProps,
} from "../types/interface";

const TransferTable: React.FC<TransferTableProps> = ({ transferData }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 text-2xl font-bold">Latest Transfer History</div>
      <div className="w-full overflow-x-auto">
        <table className="w-full max-w-lg table-auto border-collapse mt-5 mb-10 shadow-xl shadow-black ">
          <thead>
            <tr className="border-2 border-noditGreen bg-noditGreen text-white ">
              <th className="p-5">Number</th>
              <th className="p-5">From</th>
              <th className="p-5">To</th>
              <th className="p-5">Value</th>
              <th className="p-5">TransactionHash</th>
            </tr>
          </thead>
          <tbody>
            {transferData
              ? transferData.items.map(
                  (item: ContractTokenTransferResponse, index: number) => (
                    <tr
                      key={index + item.transactionHash}
                      className="border border-noditGreen hover:scale-105 duration-100 cursor-pointer"
                    >
                      <th className="font-bold p-5">{index + 1} </th>
                      <th className="font-light p-5">{item.from} </th>
                      <th className="font-light p-5">{item.to} </th>
                      {item.value.length > 25 ? (
                        <th className="font-light p-5">
                          {parseInt(item.value).toExponential(6)}{" "}
                        </th>
                      ) : (
                        <th className="font-light p-5">{item.value} </th>
                      )}
                      <th className="font-light p-5">{item.transactionHash}</th>
                    </tr>
                  )
                )
              : null}
          </tbody>
        </table>
      </div>
      {transferData ? (
        <>
          <a
            href="https://developer.nodit.io/reference/gettokentransfersbycontract"
            className="font-bold text-xl m-10"
          >
            👉 If you want to know more about Token transaction API? Then,
            please click here 👈
          </a>
        </>
      ) : null}
    </div>
  );
};

export default TransferTable;
