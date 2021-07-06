import * as api from "../api/index";

export const currentProfile = (currentId) => async (dispatch) => {
  console.log(currentId);

  const {data}  = await api.fetchUser(currentId);
  console.log("profile", data)
  dispatch({ type: "CURRENT_PROFILE", payload : data });
  console.log(" dispatched success");
};
