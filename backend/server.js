import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import conferenceRoutes from "./routes/conferenceRoutes.js";

dotenv.config();
import connectDB from "./config/db.js";

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());
app.use("/api/v1/conferences", conferenceRoutes);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);



