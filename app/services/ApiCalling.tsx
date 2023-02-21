import axios from "axios";
import { API_URL, BASE_URL, ENDPOINTS } from "../utils/helpers";
const HTTP_CLIENT = axios.create({
  baseURL: API_URL,
});
const getLIST = async () => {
  console.log(API_URL + ENDPOINTS.LIST);
  return await HTTP_CLIENT.get(ENDPOINTS.LIST);
};
export { getLIST };
