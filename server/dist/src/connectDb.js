"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoURL_1 = require("./constants/mongoURL");
const connectToDb = async () => {
    if (mongoose_1.default.connections[0].readyState) {
        console.log("DB already connected ✔️");
        return;
    }
    if (!mongoURL_1.MONGO_URI)
        throw new Error("MongoDB URI not found 🔨");
    try {
        await mongoose_1.default.connect(mongoURL_1.MONGO_URI);
        console.log("Connected to DB 🚀");
    }
    catch (err) {
        console.error("Error connecting to DB:", err);
    }
};
exports.default = connectToDb;
//# sourceMappingURL=connectDb.js.map