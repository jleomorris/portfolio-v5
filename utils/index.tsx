export const scrollTo = (target: string): void => {
  document.getElementById(target)!.scrollIntoView({ behavior: 'smooth' });
};

export const removeSpecialChars = (str: string): string =>
  str.replace(/[^a-zA-Z0-9]/g, '');

export const convertToDecimals = (value: number, decimals = 2) =>
  (Math.round(value * 100) / 100).toFixed(decimals);

export const joinClassNames = (
  ...classes: (false | null | undefined | string)[]
): string => {
  return classes.filter(Boolean).join(' ');
};

export const setBackgroundColor = (color: string) => {
  document.body.style.backgroundColor = color;
  console.log(`background color changed to ${color}`);
};

export const selectRandom = (array: any) => {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};
