require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/card", require("./router/cardRoute"));

const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		app.listen(port, () => {
			console.log("server is running....");
		});
	} catch (e) {
		console.log(e);
	}
};
start();
