### My Pothole Website project
You have a new client opportunity!  A prominent blogger has hired you to build the website for her latest project: My Pothole Website. She is photographing and logging her favorite potholes from around Boston.  Here are the project requirements:

1. Build a 3-page website (Homepage, Add new pothole, Map page) for your blogger client.  Create a navbar with three buttons using her signature theme colors (brown background, white text, goldenrod borders).  The "Home" button should be in upper left, while "Add new" and "Map" should be on the upper right.  See mockup.

2. Using Google Fonts, make sure all text on the site is displayed in "Open Sans" font. In case a user's computer cannot display Open Sans, add backup fonts to your font family, in this order: 'Open Sans', Helvetica, sans-serif.

3. The home page should use the text from the mockup ("I designed this website to document some of my favorite potholes around Boston. Below you can see my three favorite potholes. To see a map of all the potholes, click "Map" in the navigation bar. To add your own favorite potholes, click "Add new."). The text should take up about 60% of the width of the page.  The home page should also show the three pothole images, centered on the page in 3 columns, with each title centered over each picture. All three images should display in the same size. See mockup.

4. On the "Add new" page, when the user clicks "Add new pothole," the app should prompt them for the name of the new pothole. Once the user enters a new pothole name, the app should display “Thanks, I'll add that to the list!” and then list the name below. See mockup below (Pothole-AddNew-Msg3.jpg). Users should be able to enter multiple pothole names, which all display in order.

    NOTE: To display these messages, you will need an element in your HTML which has a unique ID (for example, id='display'). You can replace the contents of that HTML element from JavaScript by using `document.getElementById('display').innerHTML = "<p class='blurb'>this is some message to the user</p>"`;
    (See w3schools for more. Note also that you can put HTML into your JavaScript strings.)

5. BONUS: Add a password feature to the Add New page, so that only users who have logged in can enter the name of a new pothole.  These are the requirements:

    * When the user clicks "Log in," they should be prompted to enter a username and password (see mockup)
    * If the user tries to add a new pothole name to the list without logging in, the app should display “Sorry, you’re not logged in."
    * If the user enters an incorrect password, display “Sorry, wrong password."
    * Display “You’re logged in!” when right password is entered.  The correct password is "theMaster".
    * If the user enters the correct password, then clicks "Add new pothole," the app should prompt them for the name of the new pothole as above.
    * NOTE: If the user reloads the Add New page, or visits a different page then comes back, it's OK if they have to log in again.

6. BONUS: Adjust your code so that if a user enters the wrong password on the "Add New" page, the app keeps prompting the user to enter the correct password (until they hit the Cancel button).

7. BONUS: Add font-awesome icons to the navbar: a house symbol (home-img) for Home, a plus symbol (plus-sign) for Add New and map signs ( map-signs) for Map.
