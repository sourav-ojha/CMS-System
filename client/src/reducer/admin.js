export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE_MEMBER":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((t) =>
        t._id === action.payload._id ? action.payload : t
      );
    case "DELETE":
      return state.filter((t) => t._id !== action.payload);
    case "SORT_BY_DEPT_BCA":
      return state.filter((t) => t.course === "BCA");
    case "SORT_BY_DEPT_BSc":
      return state.filter((t) => t.course === "BSc");
    default:
      return state;
  }
};
