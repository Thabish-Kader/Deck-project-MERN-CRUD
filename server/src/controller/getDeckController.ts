import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const getDeckController = async (req: Request, res: Response) => {
	const Decks = await DeckModel.find();
	res.json(Decks);
};
