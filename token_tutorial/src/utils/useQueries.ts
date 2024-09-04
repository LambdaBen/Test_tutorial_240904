import { useQuery } from "@tanstack/react-query";
import { createWeb3ApiInstance } from "../apis/instance";
const instance = createWeb3ApiInstance();

export const useGetTokensOwnedByAccount = (
  accountAddress: string,
  page: number,
  rpp = 20
) => {
  return useQuery({
    queryKey: ["getTokensOwnedByAccount", accountAddress, page, rpp],
    queryFn: async () =>
      instance.post("token/getTokensOwnedByAccount", {
        accountAddress,
        withCount: true,
        rpp,
        page,
      }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetNativeBalanceByAccount = (accountAddress: string) => {
  return useQuery({
    queryKey: ["getNativeBalanceByAccount", accountAddress],
    queryFn: async () => {
      try {
        const result = await instance.post("native/getNativeBalanceByAccount", {
          accountAddress,
        });
        return result;
      } catch (error) {
        console.error(error);
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetTokenContractMetadataByContracts = (
  contractAddress: string
) => {
  return useQuery({
    queryKey: ["getTokenContractMetadataByContracts", contractAddress],
    queryFn: async () => {
      try {
        const result = await instance.post(
          "token/getTokenContractMetadataByContracts",
          {
            contractAddresses: [contractAddress],
          }
        );
        return result;
      } catch (error) {
        console.error(error);
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetTokenTransfersByContract = (
  contractAddress: string,
  isBlockDataEnabled: boolean,
  rpp = 50
) => {
  return useQuery({
    queryKey: ["getTokenTransfersByContract", contractAddress],
    queryFn: async () => {
      try {
        const result = await instance.post(
          "token/getTokenTransfersByContract",
          {
            contractAddress,
            rpp,
          }
        );
        return result;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: isBlockDataEnabled,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
