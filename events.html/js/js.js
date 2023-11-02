/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')


document.getElementById("highlightButton").addEventListener("click", function () {
    //  path element  to highlight by its id
    const pathToHighlight = document.getElementById("path1"); // this is where the section I want highlighting
  
    // Toggle the "highlighted" class on the path element
    pathToHighlight.classList.toggle("highlighted");
  });