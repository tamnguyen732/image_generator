import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

const router = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;
    const photoUrl = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${image}`
    );
    res.status(200).json({ photo: photoUrl.url });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

export default router;
