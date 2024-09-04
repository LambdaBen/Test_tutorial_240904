export interface NftsOwnedByAccountResponse {
  tokenId: string;
  tokenUri: string | null;
  tokenUriSyncedAt: string | null;
  ownerAddress: string;
  balance: string;
  contract: NftContract;
}
export interface OwnedNftByAccountDataItemList {
  balance: string;
  contract: NftContract;
  media: NftMedia;
  metadataSyncedAt: string | null;
  ownerAddress: string;
  rawMetadata: string | null;
  tokenId: string;
  tokenUri: string | null;
  tokenUriSyncedAt: string | null;
}

export interface NftMetadataByTokenIds {
  tokenId: string;
  tokenUri: string | null;
  tokenUriSyncedAt: string | null;
  ownerAddress: string;
  contract: NftContract;
  media: NftMedia;
}

export interface NftInfoProps {
  nftContractMetadata: NftMetadataByTokenIds;
  accountAddress: string;
}

export interface TransferTableProps {
  nftTransferData: NftTransfersByTokenIdPropsData[];
}

export interface NftTransferResponse {
  from: string;
  to: string;
  value: string;
  transactionHash: string;
}

export interface OwnerInfoProps {
  accountAddress: string;
}

export interface NftListTableProps {
  ownedNftsByAccountData: OwnedNftByAccountData;
  accountAddress: string;
  onChangeHandle: (page: number) => void;
}

export interface OwnedNftByAccountData {
  count: number;
  items: OwnedNftByAccountDataItemList[];
  page: number;
  rpp: number;
}

export interface NftContract {
  address: string;
  deployedAt: string;
  deployedTransactionHash: string;
  deployerAddress: string;
  logoUrl: string | null;
  name: string;
  symbol: string;
  type: string;
}

export interface NftMedia {
  cachedUrl: string | null;
  originUrl: string | null;
  thumbnailUrl: string | null;
  updatedAt: string | null;
}

interface NftTransfersByTokenIdNftData {
  tokenId: string;
  tokenUri: string | null;
  tokenUriSyncedAt: string | null;
}

export interface NftTransfersByTokenIdPropsData extends NftContract {
  blockNumber: number;
  from: string;
  logIndex: number;
  nft: NftTransfersByTokenIdNftData;
  timestamp: number;
  to: string;
  transactionHash: string;
  value: string;
}
