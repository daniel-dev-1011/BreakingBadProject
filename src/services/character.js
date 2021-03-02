import { apiUrl } from "../api/paths";
import { request } from "./base";

const getCharacterDetail = (params) => {
  return request(apiUrl.getDetailCharacter(params), 'get', null)
}

const getQuote = (params) => {
  return request(apiUrl.getQuote(params.author), 'get', null)
}

export default {
  getCharacterDetail,
  getQuote
}