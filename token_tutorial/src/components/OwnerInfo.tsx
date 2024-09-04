import React from "react";
import { useMemo } from "react";
import { OwnerInfoProps } from "../types/interface";
import { formatUnits } from "ethers";

const OwnerInfo: React.FC<OwnerInfoProps> = ({
  accountAddress,
  nativeTokenData,
}) => {
  const getNativeTokenData = useMemo(() => {
    if (nativeTokenData.balance) {
      return formatUnits(nativeTokenData.balance, 18).toString();
    }
  }, [nativeTokenData]);
  return (
    <div className="mt-5 flex items-center justify-between p-7 shadow-xl shadow-black">
      <h1 className="font-bold">Owner Account Information</h1>
      <p className="font-bold">
        Account Address : <span className="font-light">{accountAddress}</span>
      </p>
      <p className="font-bold">
        ETH Balance : <span className="font-light">{getNativeTokenData}</span>
      </p>
    </div>
  );
};

export default OwnerInfo;
