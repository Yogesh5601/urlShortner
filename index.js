import express from "express";
import mongoose from "mongoose";
import cors from "cors"
const app = express();
import "dotenv/config";
const url = process.env.MONGODB_URL;
const port = process.env.PORT || 5000;
import urlRoute from "./router/url.js";

// connect to mongoDB
mongoose
  .connect(url)
  .then((res) => {
    console.log("db is connected");
  })
  .catch((err) => console.log(err));

  app.use(cors())
app.use(express.json());
app.use(express())
app.use("/", urlRoute);


// server connection
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
