//helper function to capitalise the first letter of each string
// any other helper functions can be placed in this file 
export const capitaliseFirstLetter = (string: string): string => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
