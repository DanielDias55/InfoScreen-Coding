document.querySelector(".findMusic").addEventListener("click", function () {
    const pathToHighlight = document.getElementById("path1"); // Change "path1" to the desired path's id
  
    if (pathToHighlight) {
      if (pathToHighlight.classList.contains("highlighted")) {
        pathToHighlight.classList.remove("highlighted");
      } else {
        pathToHighlight.classList.add("highlighted");
      }
    }
  });
