import { API_URL } from "../config";
import { Deck } from "../typings";

export const deleteDeck = async (id: string): Promise<Deck> => {
	const res = await fetch(`${API_URL}/decks/${id}`, {
		method: "DELETE",
	});
	const deletedDeck = await res.json();
	return deletedDeck;
};
