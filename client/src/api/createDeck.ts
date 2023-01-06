import { API_URL } from "../config";
import { Deck } from "../typings";

export const createdDeck = async (title: string): Promise<Deck> => {
	const res = await fetch(`${API_URL}/decks`, {
		method: "POST",
		body: JSON.stringify({ title }),
		headers: {
			"Content-type": "application/json",
		},
	});
	const newDeck = await res.json();
	return newDeck;
};
