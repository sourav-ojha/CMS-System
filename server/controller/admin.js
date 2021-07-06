import mongoose from "mongoose";
import User from "../models/user.js";

export const fetch = async (req, res) => {
  try {
    const { role } = req.params;
    console.log("role this: ", role);
    const users = await User.find();
    const result = users.filter((u) => u.role === role);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(' ----------------------ID--------------');
    console.log(id);
    const user = await User.findById(id);
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
  }
};

export const create = async (req, res) => {
  console.log("new user creation : ");
  const { firstname, lastname, phno, course, rollno, email, role, password } =
    req.body;
    const name = firstname + ' ' + lastname;
  const newUser = await User({
    firstname,
    lastname,
    name ,
    phno,
    course,
    rollno,
    email,
    role,
    password,
  });
  console.log(newUser)
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.send("no id");

  const updateData = await User.findByIdAndUpdate(id, data, { new: true });
  res.json(updateData);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.send("no id");
  await User.findByIdAndRemove(id);
  res.json(id);
};
