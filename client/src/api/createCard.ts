import { API_URL } from "../config";
import { Deck } from "../typings";

export const createCard = async (id: string, text: string): Promise<Deck> => {
	const res = await fetch(`${API_URL}/decks/${id}`, {
		method: "POST",
		body: JSON.stringify({ text }),
		headers: {
			"Content-type": "application/json",
		},
	});
	const newCard = await res.json();
	return newCard;
};
