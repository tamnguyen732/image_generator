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
const openai_1 = require("openai");
dotenv.config();
const router = express_1.default.Router();
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
router.route("/").get((req, res) => {
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
        res.status(200).json({ photo: image });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .send((error === null || error === void 0 ? void 0 : error.response.data.error.message) || "Something went wrong");
    }
});
exports.default = router;
//# sourceMappingURL=dalleRoutes.js.map