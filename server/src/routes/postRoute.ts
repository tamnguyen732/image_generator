import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import Post from "../model/Post";

dotenv.config();

const router = express.Router();

router.route("/").get(async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});

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
    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

export default router;
