"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cloudinary_1 = require("cloudinary");
const Post_1 = __importDefault(require("../model/Post"));
dotenv.config();
const router = express_1.default.Router();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});
router.route("/").get(async (req, res) => {
    try {
        const posts = await Post_1.default.find({});
        res.status(200).json({ success: true, data: posts });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Fetching posts failed, please try again",
        });
    }
});
router.route("/").post(async (req, res) => {
    try {
        const { prompt, photo } = req.body;
        const photoUrl = await cloudinary_1.v2.uploader.upload(photo);
        const newPost = await Post_1.default.create({
            prompt,
            photo: photoUrl.url,
        });
        newPost.save();
        res.status(200).json({ success: true, data: newPost });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to create a post, please try again",
        });
    }
});
exports.default = router;
//# sourceMappingURL=postRoute.js.map