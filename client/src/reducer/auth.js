export default (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("user", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action?.payload,
        loading: false,
        errors: null,
      };
    case "LOGOUT":
      localStorage.clear();
      console.log("log out");
      return { ...state, authData: null, loading: false, errors: null };

    default:
      return state;
  }
};
