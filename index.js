const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./conflict/db");
const Productroute = require("./routes/Productroute");

dotenv.config();
const app = express();

// IMPORTANT
app.use(express.json());

app.use("/api", Productroute);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => 
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
});
