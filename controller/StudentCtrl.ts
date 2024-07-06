import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import StudentModel from "../model/StudentModel";
import { VServerUtils } from "../utils/VServerUtils";

export const getAllStudent = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const getStudentList = await StudentModel.find();
    res.send(VServerUtils.resSuccess(getStudentList));
  }
);

export const createStudent = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const bodyObj = await req.body;
    // console.log(bodyObj, "bodyObj");
    debugger;
    const createStudent = await StudentModel.create(bodyObj);
    res.send(VServerUtils.resSuccess(createStudent));
  }
);

export const updateStudent = expressAsyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const bodyObj = await req.body;
    const findStudent = await StudentModel.findById(bodyObj._id);
    if (!findStudent) return;
    const updStudent = await StudentModel.findByIdAndUpdate(bodyObj._id, {
      ...bodyObj,
    });
    res.send(VServerUtils.resSuccess(updStudent));
  }
);

export const softDelStudent = expressAsyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const bodyObj = await req.body;
    const findStudent = await StudentModel.findById(bodyObj._id);
    if (!findStudent) return;
    const updStudent = await StudentModel.findByIdAndUpdate(bodyObj._id, {
      ...bodyObj,
      isDeleted: true,
    });
    res.send(VServerUtils.resSuccess(updStudent));
  }
);
