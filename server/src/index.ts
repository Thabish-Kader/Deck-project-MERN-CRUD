import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

config();
const app = express();
const PORT = 5001;

app.get("/", (req: Request, res: Response) => {
	res.send("hello world");
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
	console.log(`listening on port ${PORT}`);
	app.listen(PORT);
});
