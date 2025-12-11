const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./conflict/db");
const Productroute = require("./routes/Productroute");
// Load .env file (must be called before using process.env)
dotenv.config();
const app = express();
app.use(express.json());
// Home Route
// app.get("/", (req, res) => {
//   res.send("<h1>Home Page ma</h1><p>Welcome to Express!</p>");
// });

// // About Route
// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1><p>This is the Express About Page.</p>");
// });

app.use("/api",Productroute);

// Use PORT from env or fallback to 3000
const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen(PORT, () => {
  console.log(`🚀Server running on http://localhost:${PORT}`);
});

// Connect to MongoDB and start server

connectDB().then(() => {
  app.listen(PORT, () => 
    console.log(`Server running at http://localhost:${PORT}`));
});
connectDB();
