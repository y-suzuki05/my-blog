export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};
