import { Document, Schema } from "mongoose";
import { VServerUtils } from "../utils/VServerUtils";

interface ISchema extends Document {
  name: string;
  categoryId: number;
  email: string;
  mobile: number;
  isDeleted: boolean;
}

const studentSchema = new Schema<ISchema>(
  {
    name: { type: String, required: true },
    categoryId: { type: Number, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

export type ICourseStore = ISchema;
export default VServerUtils.createModel<ICourseStore>(
  "Students",
  studentSchema
);
