// THIS IS FOR THE MUSIC ROOM
document.querySelector(".findMusic").addEventListener("click", function () {
    const pathToHighlight = document.getElementById("zone34"); // zone34 is the section to highlight, that I have gave an ID to.
  
    if (pathToHighlight) {
      if (pathToHighlight.classList.contains("highlighted")) {
        pathToHighlight.classList.remove("highlighted");
      } else {
        pathToHighlight.classList.add("highlighted");
      }
    }
  });
