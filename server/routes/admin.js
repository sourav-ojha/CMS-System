import express from "express";
import {
  fetch,
  fetchUser,
  create,
  update,
  deleteUser,
} from "../controller/admin.js";
import { verifyUser } from "../controller/verifyUser.js";
 
const router = express.Router();
// url : http://localhost:4000/user/
router.get("/role/:role",verifyUser, fetch);
router.post("/",verifyUser, create);

// fetch, delete, Update a USER !!
router.patch("/:id",verifyUser ,update);
router.delete("/:id",verifyUser, deleteUser);

router.get("/:id",verifyUser, fetchUser);

export default router;
 