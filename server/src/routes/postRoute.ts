import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../model/Post";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.route("/").get(async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});
    console.log(posts);
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

router.route("/").post(async (req: Request, res: Response) => {
  try {
    const { prompt, photo } = req.body;

    const newPost = await Post.create({
      prompt,
      photo,
    });

    newPost.save();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

export default router;
