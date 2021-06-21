import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//   const token = req.headers["x-access=token"];
//   if (token) {
//     console.log("token exist")
//     const user = jwt.verify(token, "1234567890");
//     if (user) {
//       req.userId = user.id;
//       console.log(user.id);
//       next();
//     }
//   } else {
//     return res.send("error occured defined by sourav");
//   }
// };

export const verifyUser = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(token)
  if (token) {
    const user = jwt.verify(token, "1234567890");
    if (user) {
      console.log("user verified")
      next();
    } else res.send({ message: "Access Denied" });
  } else {
    res.send({ message: "Access Denied" });
  }
};
export const isAdmin = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    const user = jwt.verify(token, "1234567890");
    if (user.role === "admin") {
      next();
    } else res.send({ message: "Access Denied" });
  } else {
    res.send({ message: "Access Denied" });
  }
};

export const isTeacher = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    const user = jwt.verify(token, "1234567890");
    if (user.role === "teacher") {
      next();
    } else res.send({ message: "Access Denied" });
  } else {
    res.send({ message: "Access Denied" });
  }
};
