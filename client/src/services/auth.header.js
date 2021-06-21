export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    console.log("authorization header");
    return { "x-access-token" :  user.accessToken };
  } else return {};
};
