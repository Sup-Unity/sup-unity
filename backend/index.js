const express = require("express");
const app = express();
const PORT = 8080;

// Routers
const authRoutes = require("./routes/authRoutes");
const dbRoutes = require("./routes/dbRoutes");

app.use("/auth", authRoutes);
app.use("/db", dbRoutes);

app.get("/test", (req, res) => {
  res.status(200).send({ data: "Here is your test data" });
});

app.get("/error", (req, res) => {
  res.status(500).send({ error: "THIS IS AN ERROR" });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
