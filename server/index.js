import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { authHeader } from "./middlewares/authHeader.js";
import adminRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(authHeader);

app.use("/user", adminRoutes);
app.use("/auth", authRoutes);

const CONNECTION_URL = "mongodb://localhost/CMS-git";
const PORT = process.env.port || 4000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running successfully on port : ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
