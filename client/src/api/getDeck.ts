import { API_URL } from "../config";
import { Deck } from "../typings";

export const getDeck = async (id: string): Promise<Deck> => {
	const res = await fetch(`${API_URL}/decks/${id}`);
	const newDeck = await res.json();
	return newDeck;
};
