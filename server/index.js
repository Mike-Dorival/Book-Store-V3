const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Import Routes
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(4000, () => console.log("Le serveur tourne"));
