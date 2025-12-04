import express from "express";

const app = express();
app.use(express.json());

app.post("/estimate", (req, res) => {
  res.json({ message: "Backend is ready for AI logic!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
