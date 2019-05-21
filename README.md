This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start application

### `npm install`

Run npm install to install node packages

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Overview of components

The stock.js file holds each of the products inside an array of objects. This const is imported into app.js file and stored within the state.

From here the the product component loops over the stock data to create a product for each object. Within the product component is a button which lets users add items to the basket.

This add to basket button, gets the clicked product and pushes this to the basket state. The basket component loops through the basket data to show which items are in the basket. On each basket item is a delete button, which removes the item from the basket state.

The totals component holds the total amount of products currently in the basket, by checking the basket state price and adding.
Voucher codes are checked within the totals component, and are reduced if the voucher criteria is met. An error is displayed if incorrect code.

Each component has its own .scss file within the styles folder, and is imported into the App.scss file.

node-sass was added as a dev dependency to allow the use of sass.
