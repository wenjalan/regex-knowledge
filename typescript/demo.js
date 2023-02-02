const elbert = {
  firstName: "Elbert",
  middleName: "Kaifong",
  lastName: "Cheng",
  age: 22,
}

const alan = {
  firstName: "Alan",
  lastName: "Wen",
  age: "22"
}

// accepts a user object
function printGreeting(user) {
  // print a greeting to the user
  console.log(`Hello ${user.firstName} ${user.middleName} ${user.lastName}!`)

  // print the user's age and their age in a year
  console.log(`You are ${user.age} years old! Next year, you will be ${user.age + 1} years old!`)
}

printGreeting(elbert)
printGreeting(alan)