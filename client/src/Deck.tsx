import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Deck as TDeck } from "./typings";
import { createCard } from "./api/createCard";
import { getDeck } from "./api/getDeck";
import { deleteCard } from "./api/deleteCArd";

export const Deck = () => {
	const [text, setText] = useState("");
	const [cards, setCards] = useState<string[]>([]);
	const [deck, setDeck] = useState<TDeck>();
	const { deckId } = useParams();

	const handleCreateCard = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!deckId) return;
		const newDeck = await createCard(deckId, text);
		setDeck(newDeck);
		setText("");
	};

	useEffect(() => {
		if (!deckId) return;
		const fetchDeck = async () => {
			const resDeck = await getDeck(deckId);
			setDeck(resDeck);
		};
		fetchDeck();
	}, [deckId]);

	const handleDeleteCard = async (index: number) => {
		if (!deckId) return;
		const newDeck = await deleteCard(deckId, index);
		setCards(newDeck.cards);
	};
	return (
		<div className="App">
			<ul className="decks">
				{deck?.cards.map((card, index) => (
					<li key={card}>
						{card}
						<button onClick={() => handleDeleteCard(index)}>
							X
						</button>
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateCard}>
				<label htmlFor="card-text">Card Text</label>
				<input
					id="card-text"
					type="text"
					value={text}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setText(e.target.value)
					}
				/>
				<button>Create Card</button>
			</form>
		</div>
	);
};
