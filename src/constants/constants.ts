export const baseUrl: string = "https://norma.nomoreparties.space/api";
export const authUrl: string = `${baseUrl}/auth`;

export const feedUrl: string = "wss://norma.nomoreparties.space/orders";

export const tabTypes: { [key: string]: string } = {
  bunTab: "bun",
  sauceTab: "sauce",
  mainTab: "main",
};

export const statusObj: { [key: string]: string } = {
  created: "Создан",
  pending: "Готовится",
  done: "Выполнен",
};
