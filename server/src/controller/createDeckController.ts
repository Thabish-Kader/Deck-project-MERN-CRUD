import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const createDeckController = async (req: Request, res: Response) => {
	const newDeck = new DeckModel({
		title: req.body.title,
	});
	const createdDeck = await newDeck.save();
	res.status(200).json(createdDeck);
};
