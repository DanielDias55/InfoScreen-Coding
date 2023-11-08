const buttons = document.querySelectorAll('.find');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const zoneId = button.getAttribute('data-zone'); // HTML data-* Attributes.
    const pathToHighlight = document.getElementById(zoneId);

    if (pathToHighlight) {
      pathToHighlight.classList.add("highlighted");

      // Remove the highlighted  after 3 seconds (3000 milliseconds)
      setTimeout(function () {
        pathToHighlight.classList.remove("highlighted");
      }, 3000);
    }
  });
});

document.getElementById("openPopup").addEventListener("click", function() {
  document.getElementById("bookingPopup").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("bookingPopup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Handle form submission here, e.g., send data to a server
  // You can also close the popup after successful submission
  document.getElementById("bookingPopup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

document.querySelector(".overlay").addEventListener("click", function() {
  document.getElementById("bookingPopup").style.display = "none";
  this.style.display = "none";
});
