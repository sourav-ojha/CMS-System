import express from "express";
import { fetchStudents, fetchTeachers, createStudents, createTeachers, updateTeacher, updateStudent, deleteTeacher, deleteStudent } from '../controller/admin.js'

const router = express.Router();

router.get("/students", fetchStudents);
router.post("/students", createStudents);
router.patch('/students/:id', updateStudent)
router.delete('/students/:id',deleteStudent)


router.get("/teachers", fetchTeachers);
router.post("/teachers", createTeachers);
router.patch('/teachers/:id', updateTeacher)
router.delete('/teachers/:id',deleteTeacher)

export default router ; 