import { model, Model } from "mongoose";
export class VServerUtils {
  static resSuccess(data: any, msg = "successful") {
    if (Array.isArray(data))
      return { resType: "VKP", status: true, data: [...data], message: msg };
    return { resType: "VKP", status: true, data: [data], message: msg };
  }
  static resError(ex: any) {
    return {
      resType: "VKP",
      status: false,
      msg: ex?.message,
      stack: ex?.stack,
    };
  }
  // creating mongodb id
  static createModel<T>(name: string, schema: any) {
    const myModel: Model<T> = model<T>(name, schema);
    return myModel;
  }
}
