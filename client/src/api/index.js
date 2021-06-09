import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchTeachers = () => axios.get(`${url}/admin/teachers`);
export const createTeacher = (newMember) => axios.post(`${url}/admin/teachers`,newMember);
export const updateTeacher = (id, update) => axios.patch(`${url}/admin/teachers/${id}`, update)
export const deleteTeacher = (id) => axios.delete(`${url}/admin/teachers/${id}`);

export const fetchStudents = () => axios.get(`${url}/admin/students`);
export const createStudent = (newMember) => axios.post(`${url}/admin/students`,newMember);
export const updateStudent = (id, update) => axios.patch(`${url}/admin/students/${id}`, update)
export const deleteStudent = (id) => axios.delete(`${url}/admin/students/${id}`);
