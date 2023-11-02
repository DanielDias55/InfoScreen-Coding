// THIS IS FOR THE JS ON THE MAP PAGE

document.getElementById(".findMusic").addEventListener("click", function () {
    //  path element  to highlight by its id
    const pathToHighlight = document.getElementById("path1"); // this is where the section I want highlighting
  
    // Toggle the "highlighted" class on the path element
    pathToHighlight.classList.toggle("highlighted");

    setTimeout(function () {
        pathToHighlight.classList.remove("highlighted");
      }, 10000);
  });
