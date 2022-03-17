import {URL_ORDERS, URL_INGREDIENTS} from '../constants/constants'

export const requestApi = () => {
  return fetch(URL_INGREDIENTS, {
    method: "GET",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};

export const createOrder = (ids)=>{
  return fetch(URL_ORDERS, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(ids)
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
}