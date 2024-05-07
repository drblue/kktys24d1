import express from "express";

// Create a new express app (instance)
const app = express();

// Respond to `GET /` requests
app.get("/", (req, res) => {
	console.log("Yayyy, someone visited my root :D :D :D");
	res.send({ message: "I AM (G)ROOT" });
});

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
