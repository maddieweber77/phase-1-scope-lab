// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
  }
// did not use var again to redeclare the variable 

// setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. 
// (Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, 
/// but is good for us to explore right now.

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'charlie';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'donkey';
}