export interface TokensOwnedByAccountResponse {
  ownerAddress: string;
  balance: string;
  contract: TokenContract;
}

export interface TokenContract {
  address: string;
  deployedAt: string;
  deployedTransactionHash: string;
  deployerAddress: string;
  logoUrl: string | null;
  name: string;
  symbol: string;
  type: string;
  totalSupply: string;
  decimals: number;
}

export interface HeaderProps {
  inputValue: string;
  onChangeHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickHandle: () => void;
}

export interface OwnerInfoProps {
  accountAddress: string;
  nativeTokenData: NativeTokenData;
}

interface NativeTokenData {
  balance: string;
  ownerAddress: string;
}

export interface TokenTableProps {
  ownedTokensByAccountData: OwnedTokensByAccountData;
  accountAddress: string;
  onChangeHandle: (page: number) => void;
}

interface OwnedTokensByAccountData {
  count: number;
  items: TokensOwnedByAccountResponse[];
  page: number;
  rpp: number;
}

export interface ContractTokenTransferResponse {
  from: string;
  to: string;
  value: string;
  timeStamp: number;
  blockNumber: number;
  transactionHash: string;
}

export interface ContractInfoProps {
  contractMetadata: TokenContract;
}

export interface TransferTableProps {
  transferData: TransferData;
}

interface TransferData {
  items: TransferData[];
  cursor: string | null;
  rpp: number;
}

interface TransferData extends ContractTokenTransferResponse, TokenContract {
  timestamp: string;
}
