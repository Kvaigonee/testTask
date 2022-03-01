const Router = require("express");
const Card = require("../model/card");
const router = new Router();

router.post("/addCard", async (req, res) => {
	try {
		const { Amount, CardNumber, ExpDate, Cvv } = req.body;

		const card = new Card({ CardNumber, ExpDate, Cvv, Amount });
		await card.save();

		return res.json({ requestId: card.id, Amount });
	} catch (e) {
		console.log(e);
		res.send({ message: "Server error" });
	}
});

module.exports = router;
