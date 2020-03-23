// On the "Add new" page, when the user clicks "Add new pothole," the app should prompt them for the name of the new pothole. Once the user enters a new pothole name, the app should display “Thanks, I'll add that to the list!” and then list the name below. Users should be able to enter multiple pothole names, which all display in order.

// BONUS: Adjust your code so that if a user enters the wrong password on the "Add New" page, the app keeps prompting the user to enter the correct password (until they hit the Cancel button).

let username, password, message, potholeName, addAnother, anotherPotholeName;

function logIn() {
    username = prompt(`Please enter your username:`);
    console.log(`Username: ${username}`);
    if (username == "") {
        document.getElementById('log-in-message').innerHTML = "<p>Sorry, you're not logged in.</p>";
        alert(`You must enter a username to proceed.`);
    } else {
        password = prompt(`Please enter your password:`);
        console.log(`Password: ${password}`);
        if (password === "theMaster") {
            document.getElementById('log-in-message').innerHTML = "<p>You're logged in!</p>";
// ! create loop to continually ask for password if wrong password is entered
        } else if (password == "") {
            document.getElementById('log-in-message').innerHTML = "<p>Sorry, you're not logged in.</p>";
            alert(`You must enter a password to proceed.`);
        } else {
            document.getElementById('log-in-message').innerHTML = "<p>Sorry, wrong password.</p>";
        }
    }   
}
    
function checkLogin() {
    console.log(`checkLogin password: ${password}`);
    if (password === "theMaster") {
        document.getElementById('log-in-message').innerHTML = "<p>You're logged in!</p>";
        addNewPothole(); // ! this line isn't working, need to debug
    } else {
        alert(`You must be logged in to acces this feature.`);
        document.getElementById('log-in-message').innerHTML = "<p>Sorry, you're not logged in.</p>";
        logIn();
    }

    function addNewPothole() {
        message = `Please enter the name of the new pothole that you'd like to add:`;
        potholeName = prompt(message);
        console.log(`Pothole Name: ${potholeName}`);
        document.getElementById('add-new-message').innerHTML = "<p>Thanks! We will add that to the list.</p>" + potholeName;
        addMore();

// ! need to create loop to have addMore function repeat
        function addMore() { 
            addAnother = prompt(`Would you like to add another new pothole? Please enter yes or no.`);
            addAnother = addAnother.toLowerCase();
            if (addAnother === "yes") {
                anotherPotholeName = prompt(message);
                console.log(`Another Pothole Name: ${anotherPotholeName}`);
                document.getElementById('add-more-potholes').innerHTML = "<p>".concat(anotherPotholeName, "</p>");
            } else {
                alert(`Thank you for visiting My Pothole Website! Have a great day and visit again soon!`);
            }
        }
    }
}
