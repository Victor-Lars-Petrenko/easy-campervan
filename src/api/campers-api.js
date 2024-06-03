import axios from "axios";

const instance = axios.create({
  baseURL: "https://665cf0fbe88051d60405152d.mockapi.io/api/adverts",
});

export const getCampersRequest = async (page = 1, searchQuery = {}) => {
  const searchParams = {
    limit: 4,
    page,
    ...searchQuery,
  };
  const data = await instance.get(`/campers`, { params: searchParams });
  return data;
};
