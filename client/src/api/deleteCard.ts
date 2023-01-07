import { API_URL } from "../config";
import { Deck } from "../typings";

export const deleteCard = async (
	deckId: string,
	index: number
): Promise<Deck> => {
	const res = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
		method: "DELETE",
	});
	return res.json();
};
