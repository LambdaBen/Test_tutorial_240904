import React from "react";
import { OwnerInfoProps } from "../types/interface";

const OwnerInfo: React.FC<OwnerInfoProps> = ({ accountAddress }) => {
  return (
    <div className="mt-5 flex items-center justify-between p-5 shadow-xl shadow-black">
      <p className="font-bold">
        Owner Account Address :{" "}
        <span className="font-light">{accountAddress}</span>
      </p>
    </div>
  );
};

export default OwnerInfo;
