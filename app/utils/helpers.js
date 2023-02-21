import { Dimensions } from "react-native";
export const BASE_URL = " https://pro-api.coingecko.com/";
export const API_URL = BASE_URL + "api/v3";
export const IMAGES_URL = BASE_URL + "uploadfiles/images/";

export const SEARCH_MIN_PRICE = 1;
export const SEARCH_MAX_PRICE = 4000000;
export const SEARCH_MIN_SIZE = 1;
export const SEARCH_MAX_SIZE = 1000;

export const ADDITIONAL_FEATURES_SEPARATOR_CHARACTER = ",";

export const ENDPOINTS = {
  GET_PRICES: "/simple/price",
  LIST: "/coins/list",
  VERSIS: "/simple/supported_vs_currencies",
};

export const units = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const wp = (float) => (WIDTH * float) / 100;
const hp = (float) => (HEIGHT * float) / 100;

export { wp, hp };
