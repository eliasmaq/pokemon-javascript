import apiService from "./api-service.js";

async function getCards() {
  const data = await apiService("/cards?pageSize=50");
  return data;
}

export default getCards;
