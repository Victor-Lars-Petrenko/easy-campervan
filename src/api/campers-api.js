import axios from "axios";

const instance = axios.create({
  baseURL: "https://665cf0fbe88051d60405152d.mockapi.io/api/adverts",
});

export const getCampersRequest = async () => {
  const data = await instance.get(`/campers`);
  return data;
};
