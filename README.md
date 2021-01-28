# Introduction

My name is Javier Flores Apodaca, and this is my solution for the prescreening question provided to me on the 27th, of January 2020 at 11 am PST.

This app was worked on with Create React App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Challenges I Faced:

One of the biggest challenges I faced was keeping track of shared state between two different (recycled) components. Whenever I would click on a filter component, for example "39" under "Filter by age", it would negatively impact (if already selected) the filters under "Filter by department". I managed to work around this by providing additional parameters to my handler function, however, I feel like this didn't make for the cleanest code.

Given more time I would go back and clean/refactor some of my code. Maybe even find more efficient solutions.
