import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const getCardController = async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const Deck = await DeckModel.findById(deckId);
	res.json(Deck);
};
