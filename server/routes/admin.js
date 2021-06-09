import express from "express";
import { fetchStudents, fetchTeachers, createStudents, createTeachers, updateTeacher, updateStudent, deleteTeacher, deleteStudent } from '../controller/admin.js'

const router = express.Router();

router.get("/students", fetchStudents);
router.post("/students", createStudents);
router.patch('/teachers/:id', updateStudent)
router.get("/teachers", fetchTeachers);
router.post("/teachers", createTeachers);
router.patch('/teachers/:id', updateTeacher)
router.delete('/teachers/:id',deleteTeacher)
router.delete('/students/:id',deleteStudent)

export default router ; 