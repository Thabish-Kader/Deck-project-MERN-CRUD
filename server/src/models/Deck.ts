import mongoose from "mongoose";
const { Schema } = mongoose;

const DockSchema = new Schema({
	title: String,
});

const DeckModel = mongoose.model("Deck", DockSchema);

export default DeckModel;
