// BONUS: Add a password feature to the Add New page, so that only users who have logged in can enter the name of a new pothole.  These are the requirements:

// * If the user tries to add a new pothole name to the list without logging in, the app should display “Sorry, you’re not logged in."

// * If the user enters the correct password, then clicks "Add new pothole," the app should prompt them for the name of the new pothole as above.

// If the user enters the correct password, then clicks "Add new pothole," the app should prompt them for the name of the new pothole as above.

// BONUS: Adjust your code so that if a user enters the wrong password on the "Add New" page, the app keeps prompting the user to enter the correct password (until they hit the Cancel button).

let username, password, potholeName;

function logIn() {
    let username = prompt(`Please enter your username:`);
    if (username == "") {
        username = prompt(`You must enter a username to log in. Please enter it now.`);
    } else {
        let password = prompt(`Thank you! Now please enter your password:`);
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
        document.getElementById('log-in-message').innerHTML = "<p>Sorry, you're not logged in.</p>";
        logIn();
    }
}

function addNewPothole() {
    let potholeName = prompt(`Please enter the name of the new pothole that you'd like to add:`);
    document.getElementById('add-new-message').innerHTML = "<p >Thanks! We will add that to the list.</p>" + potholeName;
}
