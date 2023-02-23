import axios from "axios";

export const getUsers = (params) => {
  return axios.get(process.env.REACT_APP_URL, {
    page: params.page,
    results: params.results,
    seed: params.seed,
  });
};
