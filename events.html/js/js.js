/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')


//Article 1
document.addEventListener("DOMContentLoaded", function() {

//Get the elements by their ID's
const attendancecount = document.getElementById("attendancecount");
const join = document.getElementById("join");

//Initial value
let number = 45;
//Update the number display
attendancecount.textContent = number;
//Add a click event listener to the button 
join.addEventListener("click", function() {
    //Toggle the number between 45 and 46
    number = number === 45 ? 46 : 45;
    //Update the number display
    attendancecount.textContent = number;
});
});

//Article 2
document.addEventListener("DOMContentLoaded", function() {

    //Get the elements by their ID's
    const attendancecount2 = document.getElementById("attendancecount2");
    const join = document.getElementById("join2");
    
    //Initial value
    let number = 72;
    //Update the number display
    attendancecount2.textContent = number;
    //Add a click event listener to the button 
    join.addEventListener("click", function() {
        //Toggle the number between 72 and 73
        number = number === 72 ? 73 : 72;
        //Update the number display
        attendancecount2.textContent = number;
    });
    });

//Article 3
document.addEventListener("DOMContentLoaded", function() {

    //Get the elements by their ID's
    const attendancecount3 = document.getElementById("attendancecount3");
    const join = document.getElementById("join3");
    
    //Initial value
    let number = 69;
    //Update the number display
    attendancecount3.textContent = number;
    //Add a click event listener to the button 
    join.addEventListener("click", function() {
        //Toggle the number between 69 and 70
        number = number === 69 ? 70 : 69;
        //Update the number display
        attendancecount3.textContent = number;
    });
    });

//Article 4
document.addEventListener("DOMContentLoaded", function() {

    //Get the elements by their ID's
    const attendancecount3 = document.getElementById("attendancecount4");
    const join = document.getElementById("join4");
    
    //Initial value
    let number = 21;
    //Update the number display
    attendancecount4.textContent = number;
    //Add a click event listener to the button 
    join.addEventListener("click", function() {
        //Toggle the number between 69 and 70
        number = number === 21 ? 22 : 21;
        //Update the number display
        attendancecount4.textContent = number;
    });
    });
    





function myFunction(){
    var x = document.getElementById("join");
    if (x.innerHTML === "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">') {
        x.innerHTML = "Join" + '<img class="emptycheckmark" src="images/emptycheckmark.png" alt="empty check mark">';
    } else {
        x.innerHTML = "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">';
    }
    
}

function myFunction2(){
    var x = document.getElementById("join2");
    if (x.innerHTML === "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">') {
        x.innerHTML = "Join" + '<img class="emptycheckmark" src="images/emptycheckmark.png" alt="empty check mark">';
    } else {
        x.innerHTML = "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">';
    }
    
}

function myFunction3(){
    var x = document.getElementById("join3");
    if (x.innerHTML === "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">') {
        x.innerHTML = "Join" + '<img class="emptycheckmark" src="images/emptycheckmark.png" alt="empty check mark">';
    } else {
        x.innerHTML = "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">';
    }
    
}

function myFunction4(){
    var x = document.getElementById("join4");
    if (x.innerHTML === "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">') {
        x.innerHTML = "Join" + '<img class="emptycheckmark" src="images/emptycheckmark.png" alt="empty check mark">';
    } else {
        x.innerHTML = "Joined" + '<img class="fullcheckmark" src="images/fullcheckmark.png" alt="fullcheckmark">';
    }
    }