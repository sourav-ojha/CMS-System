export default (current_Profile = null, action) => {
  switch (action.type) {
    case "CURRENT_PROFILE":
      return action.payload;
    default:
      return null;
  }
};
