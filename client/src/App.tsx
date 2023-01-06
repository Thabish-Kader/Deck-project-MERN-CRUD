import { FormEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Deck } from "./typings";
import { API_URL } from "./config";

function App() {
	const [title, setTitle] = useState("");
	const [decks, setDecks] = useState<Deck[]>([]);

	const createDeck = async (e: FormEvent) => {
		e.preventDefault();
		const res = await fetch(`${API_URL}/decks`, {
			method: "POST",
			body: JSON.stringify({ title }),
			headers: {
				"Content-type": "application/json",
			},
		});
		const newDeck = await res.json();
		setDecks([...decks, newDeck]);

		setTitle("");
	};

	const deleteDeck = async (id: string) => {
		const res = await fetch(`${API_URL}/decks/${id}`, {
			method: "DELETE",
		});
		const deletedDeck: Deck = await res.json();
		setDecks(decks.filter((deck) => deck._id !== deletedDeck._id));
	};

	useEffect(() => {
		const fetchDecks = async () => {
			const res = await fetch(`${API_URL}/decks`);
			const newDecks = await res.json();
			setDecks(newDecks);
		};
		fetchDecks();
	}, []);

	return (
		<div className="App">
			<ul className="decks">
				{decks.map((deck) => (
					<li key={deck._id}>
						{deck.title}
						<button onClick={() => deleteDeck(deck._id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
			<form onSubmit={createDeck}>
				<label htmlFor="deck-title">Deck tilte</label>
				<input
					id="deck-title"
					type="text"
					value={title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setTitle(e.target.value)
					}
				/>
				<button>Create Deck</button>
			</form>
		</div>
	);
}

export default App;
