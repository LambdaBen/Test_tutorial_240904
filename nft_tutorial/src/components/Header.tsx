import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValid } from "../utils/functions";

const Header = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onClickHandle = async () => {
    try {
      if (isValid(inputValue)) {
        navigate(`/nfts/${inputValue}`);
      } else {
        alert("It seems like invalid address please check again");
        setInputValue("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setInputValue("");
  }, []);
  return (
    <div className="flex items-center justify-between p-3 shadow-xl shadow-black">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/nodit.svg" alt="Logo" className="h-10 w-10 mr-4" />
        <div className="text-3xl font-bold">Nodit NFT Tutorial</div>
      </div>
      <div className="flex items-center justify-between p-3 w-full max-w-2xl">
        <input
          className="border border-noditGreen rounded-lg mr-2 p-2 flex-grow"
          value={inputValue}
          onChange={onChangeHandle}
        />
        <button
          className="ml-3 rounded-lg bg-noditGreen p-2 transition duration-300 ease-in-out hover:text-white hover:bg-noditGreenDeep font-bold shadow-xl shadow-black"
          onClick={onClickHandle}
        >
          Search Address
        </button>
      </div>
    </div>
  );
};

export default Header;
