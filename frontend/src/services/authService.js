import axios from "axios";

export const login = async (email, password) => {
  const res = await axios.post(`${window.location.origin}/api/auth/login`, { email, password });
  localStorage.setItem("token", res.data.token);
};

export const register = async (name, email, password) => {
  await axios.post(`${window.location.origin}/api/auth/register`, { name, email, password });
};
