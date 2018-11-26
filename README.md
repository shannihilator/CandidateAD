# SL_Part_3 : SalesLoft Support Software Engineer (Junior Developer) offline exercise Part 3

## Instructions to View:

    1. Navigate to a directory in your terminal where you can clone this repo
    2. git clone git@github.com:adebruyne/SL_Part_3.git
    3. cd SL_Part_3
    4. npm run serve
        **you must provide your own API key and or a .env file or you will get an error that the app crashed**
        -this command will start the backend server on port 5000
    5. In another terminal window, cd client
    6. npm run start
        -this will start React app on port 3000

    ***This app was not deployed due to the sensitivity of personal information.

## The Mission:

This app was part 3 of a code challenge for SalesLoft. The task was to build a simple web app that: 1. Show a list of People records that are available via the SalesLoft API using the API key in the email you received. Display each person’s name, email address, and job title. 2. Create a button that, when clicked, displays a frequency count of all the unique characters in all the email addresses of all the People you have access to, sorted by frequency count.

---

## The Approach:

Step 1: Given the problem to solve, I began plan by wireframming and a general concept. Given a limited timeframe, I decided on a MVP, and then made a list of future additions.

<br>

Step 2: To build this app, I thought of a layered cake: start with the 'bottom' layer and work my way up. I set up the back end or the bottom layer, using Node.js and Express. I configured the API Key using the 'dotenv' module and tested requests to the API using Postman.

<br>

Step 3: After succesfully recieving a response from the SalesLoft API, I built the one route function I needed, which was to GET all the users, using axios to make the request.

<br>

Step 4. After the backend was set-up, I began to build out the frontend using React. I imported modules like react-router-dom in order to give the effect of a page to page experience. I first hard-coded the react components to be sure that it matched the layout I wanted. I then went back in from the top layer React component, being the App.js, and added functionality by building requests to the backend and then mutating the data once it was recieved on the front end and rendering it in the appropriate components.

<br>

Step 5. Once, I had the functionality I needed on the front end, the next step was to add styling. I made the application web-responsive and added a few media queries. Again, with the limited time, I made the MVP fairly basic design-wise.

<br>

Step 6. I would have liked to deploy to AWS, but due to the private nature of the information, I decided against it.

---

## Built with:

- React
- Node.js
- Express
- PostgreSQL
- JavaScript

---

## Minimum Viable Product:

An app that displays a list of SalesLoft users and the frequency of characters represented in their emails.

---

## Obstacles

_Obstacle -_
One of the challenges I faced was splitting up the emails to count the frequency. I'm sure there was a faster, more effiecient way to do this, but I decided to break it down into smaller steps in order to keep track of each function.

````

//Splits off Emails to create a new array
\_splitEmails(peopleArr) {
let everyEmail = peopleArr.map(singleEmail => {
return singleEmail.email_address;
});

    return this._countCharacterFrequency(everyEmail);

}
//Recieves the email array to find occurances of characters
\_countCharacterFrequency(emailArr) {
//Step 1: Turn Array into one long string
let giantEmailString = emailArr.join("");

    //Step 2: Split string into characters
    let characters = giantEmailString.split("");

    //Step 3: Iterate over array
    let characterCount = {};
    characters.forEach(c => {
      //if characterCount already conatains that character, add another to the count
      if (characterCount[c]) {
        characterCount[c]++;
      }
      //else set that character's value to 1
      else {
        characterCount[c] = 1;
      }
    });
    // console.log(characterCount);

    return characterCount;

}

```
---


## Future Additions

- email frequency is sorted alphabetically
- users are sorted alphabetically
- add a search feauture
- add more styling for a more user friendly experience

<br>
````
