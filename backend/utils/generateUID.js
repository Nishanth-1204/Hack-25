export const generateUID = () => {
  const prefix = "KPR";
  const randomNumber = Math.floor(100 + Math.random() * 900);
  return `${prefix}${randomNumber}`;
};
