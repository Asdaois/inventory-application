import axios from "axios";

export const getALl = (url) => {
  return axios.get(url).then((res) => {
    console.log(res)
    return res.data
  }
  )
};