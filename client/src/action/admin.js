import * as api from "../api/index";

// Action Creators

export const fetch = (role) => async (dispatch) => {
  try {
    const { data } = await api.fetch(role);
    const action = { type: "FETCH_ALL", payload: data };
    console.log(data);
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (newMember) => async (dispatch) => {
  try {
    console.log("new : ---- ", newMember);
    const { data } = await api.createUser(newMember);
    console.log("data received : ", data);
    dispatch({ type: "CREATE_MEMBER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, update) => async (dispatch) => {
  try {
    console.log("beafore action : ", id, update);
    const { data } = await api.updateUser(id, update);
    console.log("after action : ", id, data);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const sortByDept = (dept) => async (dispatch) => {
  try {
    const role = "student";
    const { data } = await api.fetch(role);
    switch (dept) {
      case "BCA":
        dispatch({ type: "SORT_BY_DEPT_BCA", payload: data });
        break;
      case "BSc":
        dispatch({ type: "SORT_BY_DEPT_BSc", payload: data });
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
