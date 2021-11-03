// Code your solution in this file!
//returnFirstTwoDrivers() — 
//Declare the variable returnFirstTwoDrivers with const 
//and assign an anonymous function to it. 
//The assigned function should accept an array of drivers as an argument 
//and return the first two drivers in the array.

//returnLastTwoDrivers() — 
//Declare a variable with const that is assigned an anonymous function. 
//The assigned function should accept an array of drivers as an argument 
//and return the last two drivers in the array.

//selectingDrivers — 
//This is an array containing two elements: 
//the two functions that we previously defined 
//(returnFirstTwoDrivers() and returnLastTwoDrivers()).

//selectDifferentDrivers() — 
//This function takes two arguments, 
//an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
//Based on these two arguments, 
//selectDifferentDrivers() will 
//return either the first two drivers or the last two drivers.


let hondaDrivers= ["Vincent", "Mark", "Eric", "Jack"]

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

//console.log(returnFirstTwoDrivers(hondaDrivers));

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

//console.log(returnLastTwoDrivers(hondaDrivers));    

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//console.log(selectingDrivers);

const selectDifferentDrivers = function(anArray, aFunction){
    return aFunction(anArray);
}

//console.log(selectDifferentDrivers(hondaDrivers, returnLastTwoDrivers));

//createFareMultiplier() — 
//This is a higher-order function that takes in one argument, an integer, 
//and returns a function 
//that will multiply a fare for a ride accordingly. 
//If createFareMultiplier() receives an argument of 4, 
//it will return a function that takes in a fare as an argument 
//and quadruples the fare.

const createFareMultiplier = function(anInteger) {
    return (fare) => fare*anInteger;
}

//console.log(createFareMultiplier(4)(3));

//fareDoubler() — 
//Declare a variable with const 
//and assign a function returned by createFareMultiplier() to it. 
//Invoke createFareMultiplier() 
//in such a way that the new fareDoubler() function accepts a fare 
//as its lone argument 
//and doubles it.

const fareDoubler = function(fare) {
    const doublesFare = createFareMultiplier(fare)(2);
    return doublesFare;
}

//console.log(fareDoubler(40));

const fareTripler = function(fare) {
    const triplesFare = createFareMultiplier(fare)(3);
    return triplesFare;
}

//console.log(fareTripler(12))
