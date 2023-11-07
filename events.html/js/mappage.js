const buttons = document.querySelectorAll('.find');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const zoneId = button.getAttribute('data-zone');
    const pathToHighlight = document.getElementById(zoneId);

    if (pathToHighlight) {
      pathToHighlight.classList.add("highlighted");

      // Remove the 'highlighted' class after 3 seconds (3000 milliseconds)
      setTimeout(function () {
        pathToHighlight.classList.remove("highlighted");
      }, 3000);
    }
  });
});
