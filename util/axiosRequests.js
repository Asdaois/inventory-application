import axios from "axios";

export const getAll = async (url) => {
  const res = await axios.get(url);
  console.log({ url, res });
  return res;
};
