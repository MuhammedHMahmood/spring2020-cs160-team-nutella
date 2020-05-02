<h1 align="center"> Developer's Guide to the Project</h1>

## Set up

### Prerequisites

You will need

Node.js - Download & Install Node.js and the npm package manager.
Git - Download & Install Git.

Note: IE does not support the CSS grids used in this application

### Installation

Clone this repo to your desktop and run '''npm install''' to install all the dependencies.

### Running the application

After cloning the repo, go to the root directory and run '''npm install'''
After the dependencies are installed, run '''npm start'''.
You can now access the app at localhost:3000

## Testing 

### Front End

We automated the tests that check the functionality of the forms. Tests check fillable text fields for login and that the button is responsive and will log in the user.
1. Modify index.html for what page you want to test and form.spec.js for the test cases. 
2. Use cypress from command line. 
3. From one window 
```
$ npx serve
```
4. From another window 
```
$ npm run e2e
```

### Back End
Link to the backend test cases 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/498bcb61d82c922e832c) 
