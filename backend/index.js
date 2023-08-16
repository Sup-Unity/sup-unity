const path = require("path");
const express = require("express");
const app = express();
const PORT = 8080;

// Routers
const authRoutes = require("./routes/authRoutes");
const dbRoutes = require("./routes/dbRoutes");

// app.use(express.static("../frontend"));
app.use("/auth", authRoutes);
app.use("/db", dbRoutes);

app.get("/test", (req, res) => {
  res.status(200).send({ data: "Here is your test data" });
});

app.get("/error", (req, res) => {
  res.status(500).send({ error: "THIS IS AN ERROR" });
});

// Get Frontend React app
app.use(express.static(path.resolve(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
