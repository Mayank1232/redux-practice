import axios from "axios";

export const getUsers = (params) => {
  return axios.get(process.env.REACT_APP_URL, {
    page: params.page,
    limit: params.limit,
    seed: params.seed,
  });
};
