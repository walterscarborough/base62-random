import crypto from 'crypto';

const convertHexStringToNumber = (input: string): number => {
  const decimalFormatNumber = parseInt(input, 16);

  return decimalFormatNumber;
};

const convertNumberToBase62 = (input: number): string => {
  let output: string[] = [];

  const base = 62;
  const characterSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  while (input > 0) {
    const r = Math.floor(input % base);
    input = Math.floor(input / base);

    output.unshift(characterSet[r]);
  }

  return output.join('');
};

export const generateRandomBase62 = (length: number): string => {
  const randomInput = crypto.randomBytes(length).toString('hex');
  const hex = convertHexStringToNumber(randomInput);
  const output = convertNumberToBase62(hex);
  const truncatedOutput = output.substr(0, length);

  return truncatedOutput;
};
