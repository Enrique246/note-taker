// Dependencies

const express = require('express');
const path = require('path');
const fs = require ('fs');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });