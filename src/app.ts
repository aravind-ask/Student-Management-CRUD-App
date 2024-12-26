// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
