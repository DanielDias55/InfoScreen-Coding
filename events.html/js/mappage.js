// THIS IS FOR THE MUSIC ROOM
document.querySelector(".findMusic").addEventListener("click", function () {
    const pathToHighlight = document.getElementById("zone40b"); // zone40b is the section to highlight, that I have gave an ID to.
  
    if (pathToHighlight) {
      if (pathToHighlight.classList.contains("highlighted")) {
        pathToHighlight.classList.remove("highlighted");
      } else {
        pathToHighlight.classList.add("highlighted");
      }
    }
  });


// THIS IS FOR THE SAUNA
document.querySelector(".findSauna").addEventListener("click", function () {
  const pathToHighlight = document.getElementById("zone40b"); 

  if (pathToHighlight) {
    if (pathToHighlight.classList.contains("highlighted")) {
      pathToHighlight.classList.remove("highlighted");
    } else {
      pathToHighlight.classList.add("highlighted");
    }
  }
});

// THIS IS FOR THE CARETAKER
document.querySelector(".findCaretaker").addEventListener("click", function () {
  const pathToHighlight = document.getElementById("zone46"); 

  if (pathToHighlight) {
    if (pathToHighlight.classList.contains("highlighted")) {
      pathToHighlight.classList.remove("highlighted");
    } else {
      pathToHighlight.classList.add("highlighted");
    }
  }
});

// THIS IS FOR THE BAR
document.querySelector(".findBar").addEventListener("click", function () {
  const pathToHighlight = document.getElementById("zone40b"); 

  if (pathToHighlight) {
    if (pathToHighlight.classList.contains("highlighted")) {
      pathToHighlight.classList.remove("highlighted");
    } else {
      pathToHighlight.classList.add("highlighted");
    }
  }
});

// THIS IS FOR THE LAUNDRY
document.querySelector(".findLaundry").addEventListener("click", function () {
  const pathToHighlight = document.getElementById("zone36"); 

  if (pathToHighlight) {
    if (pathToHighlight.classList.contains("highlighted")) {
      pathToHighlight.classList.remove("highlighted");
    } else {
      pathToHighlight.classList.add("highlighted");
    }
  }
});

// THIS IS FOR THE GAMES ROOM
document.querySelector(".findGames").addEventListener("click", function () {
  const pathToHighlight = document.getElementById("zone42"); 
  if (pathToHighlight) {
    if (pathToHighlight.classList.contains("highlighted")) {
      pathToHighlight.classList.remove("highlighted");
    } else {
      pathToHighlight.classList.add("highlighted");
    }
  }
});