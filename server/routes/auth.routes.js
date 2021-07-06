import express from "express";
import {signin, signup} from '../controller/auth.controller.js'

const router = express.Router();
// url : http://localhost:4000/auth/


router.post('/signin',  signin)
router.post('/signup', signup)







export default router;
