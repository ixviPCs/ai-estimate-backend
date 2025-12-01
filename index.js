import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/estimate", async (req, res) => {
  try {
    res.json({ message: "Backend is working!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
