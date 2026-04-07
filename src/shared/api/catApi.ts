import { Cat } from "@shared/types/cat";

const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY =
  "live_R83lvpNxGyngE8VyVV8B5LEDgmnn3UXKtsRpqP3wjtaq03fZt9GWXrfTSyZ1vFCl";

export const fetchCats = async (page = 0, limit = 10): Promise<Cat[]> => {
  const RESPONSE_STRING = `${API_URL}?limit=${limit}&page=${page}&api_key=${API_KEY}`;
  const response = await fetch(RESPONSE_STRING);

  if (!response.ok) {
    throw new Error("Ошибка загрузки");
  }

  return response.json();
};
