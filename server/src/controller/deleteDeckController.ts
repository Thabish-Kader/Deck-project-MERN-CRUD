import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const deleteDeckController = async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const deletedDeck = await DeckModel.findByIdAndDelete(deckId);
	res.json(deletedDeck);
};
