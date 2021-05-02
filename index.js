// Write your solution in this file!
customerName = 'bob';

/*function name(){
    return customerName;
}*/

function upperCaseCustomerName(){
     customerName = customerName.toUpperCase(); 
     return customerName; 
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'mark';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'maybe mark';
    return leastFavoriteCustomer;
}
