import { useQuery } from "@tanstack/react-query";
import { createWeb3ApiInstance } from "../apis/instance";
const instance = createWeb3ApiInstance();

export const useGetNFTsOwnedByAccount = (
  accountAddress: string,
  page: number
) => {
  return useQuery({
    queryKey: ["getNFTsOwnedByAccount", accountAddress, page],
    queryFn: async () => {
      try {
        const result = await instance.post("nft/getNftsOwnedByAccount", {
          accountAddress,
          withCount: true,
          withMetadata: true,
          rpp: 20,
          page: page,
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

export const useGetNFTMetadataByTokenIds = (
  contractAddress: string,
  tokenId: string
) => {
  return useQuery({
    queryKey: ["getNFTMetadataByTokenIds", contractAddress, tokenId],
    queryFn: async () => {
      try {
        const result = await instance.post("nft/getNftMetadataByTokenIds", {
          tokens: [
            {
              contractAddress,
              tokenId,
            },
          ],
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

export const UseGetNftTransfersByTokenId = (
  contractAddress: string,
  tokenId: string,
  isEnable: boolean,
  rpp = 50
) => {
  return useQuery({
    queryKey: ["getNftTransfersByTokenId", contractAddress, tokenId, rpp],
    queryFn: async () => {
      try {
        const result = await instance.post("nft/getNftTransfersByTokenId", {
          contractAddress,
          tokenId,
          rpp,
        });
        return result;
      } catch (error) {
        console.error(error);
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
    enabled: isEnable,
  });
};
