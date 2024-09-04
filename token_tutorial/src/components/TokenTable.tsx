import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TokenTableProps,
  TokensOwnedByAccountResponse,
} from "../types/interface";
import Pagination from "react-js-pagination";
import { useMemo } from "react";
import { formatUnits } from "ethers";
import { unitConversion } from "../utils/functions";

const TokenTable: React.FC<TokenTableProps> = ({
  ownedTokensByAccountData,
  accountAddress,
  onChangeHandle,
}) => {
  const navigate = useNavigate();
  const getOwnedTokensByAccountData = useMemo(
    () =>
      ownedTokensByAccountData?.items.map(
        (item: TokensOwnedByAccountResponse) => ({
          ...item,
          balance: unitConversion(
            formatUnits(BigInt(item.balance), item.contract.decimals)
          ),
        })
      ),
    [ownedTokensByAccountData]
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 text-2xl font-bold">Token List</div>
      {getOwnedTokensByAccountData && getOwnedTokensByAccountData.length > 0 ? (
        <div>
          <table className="w-full max-w-7xl table-fixed border-collapse mt-5 mb-10 shadow-xl shadow-black ">
            <thead>
              <tr className="border-2 border-noditGreen bg-noditGreen text-white ">
                <th className="p-5">Number</th>
                <th className="p-5">Name</th>
                <th className="p-5">Symbol</th>
                <th className="p-5">Decimals</th>
                <th className="p-5">Balances</th>
              </tr>
            </thead>
            <tbody>
              {getOwnedTokensByAccountData.map(
                (item: TokensOwnedByAccountResponse, index: number) => (
                  <tr
                    key={item.contract.deployedTransactionHash}
                    className="border border-noditGreen hover:scale-105 duration-100 cursor-pointer "
                    onClick={() => {
                      navigate(
                        `/tokens/${accountAddress}/${item.contract.address}`
                      );
                    }}
                  >
                    <th className="font-bold p-5">
                      {ownedTokensByAccountData.page === 1
                        ? index + 1
                        : ownedTokensByAccountData.page * 20 + index - 19}
                    </th>
                    <th className="font-light p-5">{item.contract.name}</th>
                    <th className="font-light p-5">{item.contract.symbol}</th>
                    <th className="font-light p-5">{item.contract.decimals}</th>
                    <th className="font-light p-5">{item.balance}</th>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="mb-10">
            <Pagination
              activePage={ownedTokensByAccountData.page}
              itemsCountPerPage={ownedTokensByAccountData.rpp}
              totalItemsCount={ownedTokensByAccountData.count}
              pageRangeDisplayed={10}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={onChangeHandle}
            />
          </div>
        </div>
      ) : (
        <div>This Account doesn't have any Tokens</div>
      )}
    </div>
  );
};

export default TokenTable;
