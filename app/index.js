import express from "express";

export const app = express();

app.get("/status", async (req, res) => {
	res.send("ONLINE");
});
