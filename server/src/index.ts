import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import Deck from "./models/Deck";
import cors from "cors";
import { getDeckController } from "./controller/getDeckController";
import { deleteDeckController } from "./controller/deleteDeckController";
import { createDeckController } from "./controller/createDeckController";
import { createCardController } from "./controller/createCardController";
// CONFIGURATION
config();
const app = express();
const PORT = 5001;
app.use(express.json());
app.use(cors());

// Routes
app.get("/decks", getDeckController);

app.post("/decks", createDeckController);

app.delete("/decks/:deckId", deleteDeckController);

app.post("/decks/:deckId", createCardController);

// Connection
mongoose.connect(process.env.MONGO_URL!).then(() => {
	console.log(`listening on port ${PORT}`);
	app.listen(PORT);
});
