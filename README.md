## Homework 11

## Note-Taker
### Description
- What was your motivation?
  - Build an app that has both manually built front-end and a server-side local saving.
- Why did you build this project?  
  - To start to understand how front-end and back-end relate and work togather.
- What problem does it solve?
```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
- What did you learn?
  - Deployment to Heroku
  - Storage of notes with unique IDs in a JSON file.
  - Connect to an Express.js back end
  - Deleting info from server
  - The generation of a v4 UUID 
  - Generating various routes to html files
  

### Lenguages Required:
- Node.js
- JavaScript
- HTML
- UUID
- CSS
- Express

## Usage

[Link to Website](https://note-taker-forest234.herokuapp.com/)

## Resources
- https://www.sohamkamani.com/uuid-versions-explained/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
- https://www.npmjs.com/package/inquirer
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


## Credits
- Enrique Del Castillo Chávez

## Tests
- Connection between both htmls passed
- Note inputs
- Note saving
- Note deleting
- Note storage in local server
- List appears on the left side
- Link named "Note-Taker" at the left side works
