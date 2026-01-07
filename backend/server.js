const express = require("express");
const cors = require("cors");
require("dotenv").config();

const confessionRouter = require("./src/routes/confessionRouter");
const adminRouter = require("./src/routes/adminRouter");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://whizper.vercel.app"
  ],
  methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("*", cors());

app.use(express.json());

app.use("/api/confessions", confessionRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});