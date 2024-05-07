import express from "express";
import { index, store } from "./controllers/root";

// Create a new express app (instance)
const app = express();

// Respond to `GET /` requests
app.get("/", index);

// Respond to `POST /` requests
app.post("/", store);

// Respond to `GET /luke` requests
app.get("/luke", (req, res) => {
	res.send({ message: "I AM YOUR FATHER" });
});

// Respond to `POST /todos` requests
app.post("/todos", (req, res) => {
	// somehow create a new todo
	res.send({ message: "would have created todo if i knew how" });
});

// Listen for incoming requests
app.listen(3000, () => {
	console.log("Server listening for requests on http://localhost:3000");
});
