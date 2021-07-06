import axios from "axios";
import { authHeader } from "../services/auth.header";
const url = "http://localhost:4000/user";
const url2 = "http://localhost:4000/auth";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const fetch = (role) =>
  axios.get(`${url}/role/${role}`, { headers: authHeader() });
export const createUser = (newMember) =>
  axios.post(`${url}`, newMember, { headers: authHeader() });
export const updateUser = (id, update) =>
  axios.patch(`${url}/${id}`, update, { headers: authHeader() });
export const deleteUser = (id) =>
  axios.delete(`${url}/${id}`, { headers: authHeader() });


  // fetch User
export const fetchUser = (id) =>
  axios.get(`${url}/${id}`, { headers: authHeader() });

  // auth user
export const signIn = (data) => axios.post(`${url2}/signin`, data);
export const signUp = (data) => axios.post(`${url2}/signup`, data);
