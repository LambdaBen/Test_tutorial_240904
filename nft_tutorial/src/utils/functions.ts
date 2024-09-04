export function isValid(inputValue: string): boolean {
  if (
    inputValue.length === 42 ||
    inputValue.startsWith("0x") ||
    inputValue.slice(2).match(/^[0-9a-fA-F]+$/)
  ) {
    return true;
  } else {
    return false;
  }
}

export function getImageUrl(
  originUrl: string | null,
  cachedUrl: string | null
): string | null {
  let imageUrl = null;
  if (cachedUrl) {
    imageUrl = cachedUrl;
  } else if (
    cachedUrl === null &&
    originUrl &&
    originUrl.slice(0, 4) === "ipfs"
  ) {
    imageUrl = originUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
  } else {
    imageUrl = null;
  }
  return imageUrl;
}
