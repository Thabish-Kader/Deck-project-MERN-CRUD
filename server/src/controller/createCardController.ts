import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const createCardController = async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const { text } = req.body;
	const deck = await DeckModel.findById(deckId);
	if (!deck) return res.status(400).send("No such deck");
	deck.cards.push(text);
	await deck.save();
	res.status(200).json(deck);
};
