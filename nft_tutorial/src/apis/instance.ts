import axios, { AxiosInstance } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const protocol = import.meta.env.VITE_PROTOCOL;
const network = import.meta.env.VITE_NETWORK;

export function createWeb3ApiInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: `https://web3.nodit.io/v1/${protocol}/${network}`,
    headers: {
      "X-API-KEY": `${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return instance;
}
