import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const requestRegister = async (formData) => {
  const { data } = await authInstance.post("users/signup", formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await authInstance.post("users/signin", formData);
  setToken(data.token);
  return data;
};


export const requestlogout = async () => {
  const { data } = await authInstance.post("users/signout");
  return data;
};

//Friends
export const requestFriends = async () => {
  const { data } = await authInstance.get("/friends");
  return data;
};

//News

export const requestNews = async () => {
  const { data } = await authInstance.get("/news");
  return data;
};