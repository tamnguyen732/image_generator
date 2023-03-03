import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

const port = 3000;
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
