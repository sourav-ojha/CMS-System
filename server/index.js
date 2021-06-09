import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/admin', adminRoutes);

const CONNECTION_URL = "mongodb://localhost/cms";
const PORT = process.env.port || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running successfully on port : ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
