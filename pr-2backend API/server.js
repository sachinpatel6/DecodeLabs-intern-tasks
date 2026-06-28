const express = require("express");
const cors = require("cors");
const rightsRoutes = require("./routes/rights");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());           // allows our frontend (different origin) to call this API
app.use(express.json());   // lets us read JSON from POST request bodies

// Health check route - just to confirm the server is alive
app.get("/", (req, res) => {
  res.send("Know Your Rights API is running.");
});

// All rights-related routes live under /api/rights
app.use("/api/rights", rightsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
