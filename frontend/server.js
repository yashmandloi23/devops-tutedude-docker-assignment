const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// FORCE Express to use the correct views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/submit",
      req.body
    );
    res.send(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error connecting to backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
