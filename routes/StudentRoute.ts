import express from "express";
import {
  createStudent,
  getAllStudent,
  softDelStudent,
  updateStudent,
} from "../controller/StudentCtrl";

const router = express.Router();

router.get("/", getAllStudent);

router.post("/createStudent", createStudent);

router.put("/updateStudent", updateStudent);

router.put("/softDelStudent", softDelStudent);

export default router;
