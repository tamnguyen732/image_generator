import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/postRoute";
import dalleRoutes from "./routes/dalleRoutes";
import connectToDb from "./connectDb";
const port = 5000;
dotenv.config();

connectToDb();

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
};

startServer();
