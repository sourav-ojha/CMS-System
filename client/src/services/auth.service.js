import * as api from "../api/index";

export const signIn = async (formData, history) => {
  try {
    const { data } = await api.signIn(formData);
    console.log("my data", data);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = async (formData, history) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = (history) => {
  localStorage.clear();
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
