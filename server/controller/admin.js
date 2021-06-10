import mongoose from "mongoose";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";

export const fetchStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    console.log(error.message);
  }
};

export const createStudents = async (req, res) => {
  const data = req.body;
  const newStudent = new Student(data);
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const createTeachers = async (req, res) => {
  const data = req.body;
  const newTeacher = new Teacher(data);
  try {
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.send("no id");
  
  const updateData = await Teacher.findByIdAndUpdate(id, data, {new : true});
  
  res.json(updateData);
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.send("no id");
  
  const updateData = await Student.findByIdAndUpdate(id, data, {new : true});
  res.json(updateData);
};

export const deleteTeacher = async (req, res) => {
  const { id }= req.params;
   
  if (!mongoose.Types.ObjectId.isValid(id)) return res.send("no id");
  
  await Teacher.findByIdAndRemove(id);
  res.json(id);
}

export const deleteStudent = async (req, res) => {
  const { id }= req.params;
   
  if (!mongoose.Types.ObjectId.isValid(id)) return res.send("no id");
  
  await Student.findByIdAndRemove(id);
  res.json(id);
}
