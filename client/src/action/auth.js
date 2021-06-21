import * as api from "../api/index";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log("my data", data);
    dispatch({ type: "AUTH", payload: data });
    afterAuth(data.role, history);
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: "AUTH", payload: data });
    afterAuth(data.role, history);
  } catch (error) {
    console.log(error);
  }
};

export const logOut = (history) => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
  history.push('/')
};

const afterAuth = (role, history) => {
  if (role === "admin") history.push("/admin");
  else if (role === "teacher") history.push("/dashboard");
  else if (role === "student") history.push("/dashboard");
};
