import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { set } from "mongoose";
import morgan from "morgan";
import { initMongo } from "../config/dbConnect";
import { errorHandler, notFound } from "../middlewares/ErrorHandler";
import StudentRoute from "../routes/StudentRoute";

const configEnv = dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
set("strictQuery", false);
try {
  initMongo();
} catch (ex: any) {
  console.log("MongoDB Connection Fail. ", ex.message);
}

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "100mb" }));

app.use("/api/student", StudentRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Listen Port ${PORT}`);
});
