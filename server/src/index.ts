import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import Deck from "./models/Deck";
import cors from "cors";
// CONFIGURATION
config();
const app = express();
const PORT = 5001;
app.use(express.json());
app.use(cors());

// Routes
app.get("/decks", async (req: Request, res: Response) => {
	const Decks = await Deck.find();
	res.json(Decks);
});

app.post("/decks", async (req: Request, res: Response) => {
	const newDeck = new Deck({
		title: req.body.title,
	});
	const createdDeck = await newDeck.save();
	res.status(200).json(createdDeck);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const deletedDeck = await Deck.findByIdAndDelete(deckId);
	res.json(deletedDeck);
});

// Connection
mongoose.connect(process.env.MONGO_URL!).then(() => {
	console.log(`listening on port ${PORT}`);
	app.listen(PORT);
});
