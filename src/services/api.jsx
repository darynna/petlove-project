import axios from "axios";
import { toastRejected } from "./notify";

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

export const requestUserCurrent = async () => {
  const { data } = await authInstance.get("users/current/full");
  return data;
};

export const requestUpdateCurrentUser = async (info) => {
  try {
    console.log("Updating user with info:", info);
    const { data } = await authInstance.patch("users/current/edit", info);
    console.log("Updated user data:", data);
    return data;
  } catch (error) {
     toastRejected("Error updating user info:", error.response ? error.response.data : error.message);
    throw error;
  }
};

//Friends
export const requestFriends = async () => {
  const { data } = await authInstance.get("/friends");
  return data;
};

//News

export const requestNews = async (page) => {
  const { data } = await authInstance.get(`/news?page=${page}`);
  return data;
};

//notices

export const requestAddNotice = async (id) => {
  const { data } = await authInstance.post(`notices/favorites/add/${id}`);
  return data;
};

export const requestNotices = async (page) => {
  const { data } = await authInstance.get(`/notices?page=${page}`);
  return data;
};

export const requestdeleteNotice = async (id) => {
  const { data } = await authInstance.delete(`notices/favorites/remove/${id}`);
  return data;
};