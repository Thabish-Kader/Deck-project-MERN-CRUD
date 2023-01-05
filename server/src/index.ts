import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import Deck from "./models/Deck";

// CONFIGURATION
config();
const app = express();
const PORT = 5001;
app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
	const Decks = await Deck.find();
	res.json(Decks);
});

app.post("/decks", async (req: Request, res: Response) => {
	const newDeck = new Deck({
		title: req.body.title,
	});
	const createdDeck = await newDeck.save();
	res.status(200).json({ createdDeck });
});

// Connection
mongoose.connect(process.env.MONGO_URL!).then(() => {
	console.log(`listening on port ${PORT}`);
	app.listen(PORT);
});
