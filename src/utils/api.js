const url = "https://norma.nomoreparties.space/api/ingredients ";

export const requestApi = () => {
  return fetch(url, {
    method: "GET",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};
