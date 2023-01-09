// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

//const { get } = require("http")
//const { describe } = require("yargs")


// const { it } = require("node:test") caught you this time
// const { describe } = require("yargs") caught you this time

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// -- pseudo code -- //
// i will start be describing the array by giving it a variable
// write an (it) statment with conditions i want the array to meet
// then write an (expect) statment of the outcome to matching my conditons  

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// const expect (["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
// expect (['purple']).not.toEqual(expect.colors2))
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse","indigo","periwinkle","ochre","aquamarine","saffron"]
describe ('colorCoded', () => {

  it("takes in an array, removes the first item from the array and shuffles the remaining content", () =>{

  expect (colorCoded(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))

  expect (colorCoded(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))

})
})

// I Really want the code to look clean and compact that way i can read through quickly without gettng confused and make changes faster if needed 
// ReferenceError: colorCoded is not defined
// error Command failed with exit code 1. good error! wowza
// ---- end ----//

// b) Create the function that makes the test pass.
// --- pseudo code ---//
// first things first assign a virable to the fuction
// going to set my perameters to let my arrays to pass through 
// im cutting the fist index (.shift)
// reassign the variable the the (array) thats getting passed through
// creat a shuffle using math.random 
  let colorCoded = (array) => {
  array.shift
  let colorChange = array
  for (let  i = colorChange.length - 1; i > 0; i--){
  let j = Math.floor(Math.random() * (i + 1));
        let temp = colorChange[i];
        colorChange[i] = colorChange[j];
        colorChange[j] = temp;
  }
 return colorChange
}
// return the variable that was reassigned
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.195 s, estimated 1 s
/////-------end--------///////

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// make are statement and conditions
const votes1 = { upVotes: 13, downVotes: 2 }
const votes2 = { upVotes: 2, downVotes: 33 }
describe('voteState', () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(voteState(votes1)).toEqual(11)
    // Expected output: 11
    expect(voteState(votes2)).toEqual(-31)
    // Expected output: -31
  })
})



// b) Create the function that makes the test pass.
// we want to run the values through a function and subtract 
const voteState = (object) => {
  // const voteState: (object: any) => number
  //      upvotes value           -     downvotes value
  return Object.values(object)[0] - Object.values(object)[1]
}
// voteState
//     ✓ takes in an object that contains up votes and down votes and returns the end tally

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.147 s, estimated 1 s.
/////-----end------////
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
describe('noDubs', () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(noDubs(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})


// b) Create the function that makes the test pass.
// were gonna creat a function using two arrays and combining them with out same values
let noDubs = (array1, array2) => {
  // noDubs is the function 
  let array3 = (array1.concat(array2))
  // concat the arrays 
  return [...new Set(array3)]
  // return the 3rd array with using set to only return values only used once
}

// noDubs
// ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.175 s, estimated 1 s
// ///---end---///