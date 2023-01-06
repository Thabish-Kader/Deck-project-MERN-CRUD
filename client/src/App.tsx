import { FormEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Deck } from "./typings";
import { API_URL } from "./config";
import { createdDeck } from "./api/createDeck";
import { deleteDeck } from "./api/deleteDeck";
import { Link } from "react-router-dom";
function App() {
	const [title, setTitle] = useState("");
	const [decks, setDecks] = useState<Deck[]>([]);

	const handleCreateDeck = async (e: FormEvent) => {
		e.preventDefault();
		const newDeck = await createdDeck(title);
		setDecks([...decks, newDeck]);
		setTitle("");
	};

	const handleDeleteDeck = async (id: string) => {
		const deletedDeck = await deleteDeck(id);
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
						<Link to={`/decks/${deck._id}`}>{deck.title}</Link>
						<button onClick={() => handleDeleteDeck(deck._id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateDeck}>
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
