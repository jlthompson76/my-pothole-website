// BONUS: Add a password feature to the Add New page, so that only users who have logged in can enter the name of a new pothole.

// * If the user enters the correct password, then clicks "Add new pothole," the app should prompt them for the name of the new pothole as above.

// BONUS: Adjust your code so that if a user enters the wrong password on the "Add New" page, the app keeps prompting the user to enter the correct password (until they hit the Cancel button).

// ! To Do - keep adding new potholes and have them appear on the screen, fix checkLogin function so it recognizes the correct password, create loop to ask for correct password

let username, password, message, potholeName, addAnother, anotherPotholeName;

function logIn() {
    username = prompt(`Please enter your username:`);
    if (username == "") {
        alert(`You must enter a username to log in.`);
        document.getElementById('log-in-message').innerHTML = "<p>Sorry, you're not logged in.</p>";
    } else {
        password = prompt(`Thank you! Now please enter your password:`);
        if (password === "theMaster") {
            document.getElementById('log-in-message').innerHTML = "<p>You're logged in!</p>";
        } else {
            document.getElementById('log-in-message').innerHTML = "<p>Sorry, wrong password.</p>";
        }
    }
}

function checkLogin() {
    if (password === "theMaster") {
        addNewPothole();
    } else {
        alert(`You must be logged in to acces this feature.`);
        document.getElementById('log-in-message').innerHTML = "<p>Sorry, you're not logged in.</p>";
        logIn();
    }
}

function addNewPothole() {
    message = `Please enter the name of the new pothole that you'd like to add:`;
    potholeName = prompt(message);
    document.getElementById('add-new-message').innerHTML = "<p>Thanks! We will add that to the list.</p>" + potholeName;
    addAnother = prompt(`Would you like to add another new pothole? Please enter yes or no.`);
    addAnother = addAnother.toLowerCase();
    if (addAnother === "yes") {
        anotherPotholeName = prompt(message);
        document.getElementById('add-more-potholes').innerHTML = "<p>" + anotherPotholeName;
    } else {
        alert(`Thank you for visiting My Pothole Website! Have a great day and visit again soon!`);
    }
}
