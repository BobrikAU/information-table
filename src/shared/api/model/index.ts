import axios, { AxiosError } from "axios";
import { BASE_URL } from "../index";

axios.defaults.baseURL = BASE_URL;

const handleErrors = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    let massage = "";
    if (error.response) {
      massage = `Произошла ошибка при получении данных от сервера. Код ответа: ${error.response.status}. Ответ сервера: ${error.response.statusText}. ${error.message}.`;
    } else if (error.request) {
      massage = `Приозошла ошибка. Ответ сервера не получен. ${error.message}.`;
    } else {
      massage = `Приозошла ошибка. ${error.message}.`;
    }
    console.log(massage);
  } else {
    console.log(error);
  }
};

export const getLocation = async () => {
  try {
    const response = await axios.get(`/location`);
    console.log(response.data.results);
  } catch (error) {
    handleErrors(error);
  }
};

export const getCharacter = async () => {
  try {
    const response = await axios.get(`/character`);
    console.log(response.data.results);
  } catch (error) {
    handleErrors(error);
  }
};
