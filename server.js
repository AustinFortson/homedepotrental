// Dependencies
// =============================================================
require('dotenv').config();
const express       = require('express');
const cors          = require('cors');

// Sets up the Express App
// =============================================================
const PORT      = process.env.PORT || 8080;
const app       = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets
if (process.env.NODE_ENV === "production"){
app.use(express.static("client/build"));
}


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`))