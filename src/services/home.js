import { apiUrl } from "../api/paths";
import { request } from "./base";

const getAllCharacters = (params) => {
  return request(apiUrl.getCharacters, 'get', params)
}

export default {
  getAllCharacters
}