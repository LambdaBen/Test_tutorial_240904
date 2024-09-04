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

export function unitConversion(value: string): string {
  const standardPoint = value.split(".");
  let integerPart =
    parseInt(standardPoint[0]).toLocaleString().length > 15
      ? parseInt(standardPoint[0]).toExponential(6)
      : parseInt(standardPoint[0]).toLocaleString();

  let decimalPart = standardPoint[1];

  if (decimalPart === "0") {
    decimalPart = "";
  } else if (decimalPart?.length > 6) {
    decimalPart = decimalPart.slice(0, 6) + "...";
  } else {
    decimalPart = decimalPart;
  }

  return integerPart + (decimalPart ? "." + decimalPart : "");
}
