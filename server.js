// Dependencies

const express = require('express');

// Sets up the Express App
const application = express();
const PORT = process.env.PORT || 3003;

const apiRout = require ("./routes/ApiRoutes");
const htmlRout = require ("./routes/HtmlRoutes");

application.use(express.urlencoded({extended:true}));
application.use(express.json());

application.use("/api", apiRout);
application.use("/", htmlRout);

application.use(express.static("public"));

// LISTENER
// The below code effectively "starts" our server

application.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}!`);
  });
  
// Routes
//GET /notes should return the notes.html file.

//GET * should return the index.html file.

//API Routes
//GET /api/notes should read the db.json file and return all saved notes as JSON.
//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.