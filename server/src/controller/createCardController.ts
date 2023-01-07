import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const createCardController = async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const { text } = req.body;
	const deck = await DeckModel.findById(deckId);
	deck?.cards.push(text);
	res.status(200).json(deck);
};
