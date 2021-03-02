export const baseUrl = `https://www.breakingbadapi.com/`;

export const apiUrl = {
  getCharacters: baseUrl + "api/characters",
  getDetailCharacter: (id) => baseUrl + `api/characters/${id}`,
  getQuote: (author) => baseUrl + `api/quote/random?author=${author}`
}