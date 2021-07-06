import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({ message: "please Enter your info" });
    }

    const user = await User.findOne({ email });
    if (password === user.password) {
      const token = genToken(user);
      const { password, ...userWithoutPassword } = user;
      const result = {
        ...userWithoutPassword._doc,
        accessToken: token,
      };
      console.log("user logged in !!");
      res.status(200).json(result);
    } else {
      res.status(401).json({
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "server Error",
    });
  }
};

export const signup = async (req, res) => {
  try {
    const { firstname, lastname, phno, course, rollno, email, role, password } =
      req.body;

    const user = await User.findOne({ email });
    if (!user) {
      const name = firstname + " " + lastname;
      const newUser = await User({
        firstname,
        lastname,
        name,
        phno,
        course,
        rollno,
        email,
        role,
        password,
      });
      console.log(newUser);
      await newUser.save();
      const token = genToken(newUser);

      const { password, ...userWithoutPassword } = newUser;
      const result = {
        ...userWithoutPassword._doc,
        accessToken: token,
      };
      res.status(200).json(result);
    } else {
      res.status(403).json({ message: "user Exits" });
    }
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const genToken = (user) => {
  const token = jwt.sign({ id: user.id, role: user.role }, "1234567890");
  return token;
};
