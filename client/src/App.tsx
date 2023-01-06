import { FormEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Deck } from "./typings";

function App() {
	const [title, setTitle] = useState("");
	const [decks, setDecks] = useState<Deck[]>([]);

	const sendTitle = async (e: FormEvent) => {
		e.preventDefault();
		const res = await fetch("http://localhost:5001/decks", {
			method: "POST",
			body: JSON.stringify({ title }),
			headers: {
				"Content-type": "application/json",
			},
		});
		const newDecks = res.json();

		setTitle("");
	};

	useEffect(() => {
		const fetchDecks = async () => {
			const res = await fetch("http://localhost:5001/decks");
			const newDecks = await res.json();
			console.log(newDecks);
			setDecks(newDecks);
			// setDecks([...decks], newDecks);
		};
		fetchDecks();
	}, []);

	return (
		<div className="App">
			<ul className="decks">
				{decks.map((deck) => (
					<li key={deck._id}>{deck.title}</li>
				))}
			</ul>
			<form onSubmit={sendTitle}>
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
