import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Deck as TDeck } from "./typings";

export const Deck = () => {
	const [text, setText] = useState("");
	const [cards, setCards] = useState<string[]>([]);
	const [deck, setDeck] = useState<TDeck>();
	const { deckId } = useParams();

	const handleCreateCard = () => {};

	const handleDeleteCard = (index: number) => {};
	return (
		<div className="App">
			<ul className="decks">
				{cards.map((card, index) => (
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
