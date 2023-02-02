// User interface defines the properties and types
// Forms a "contract"
interface User {
  firstName: string,
  middleName: string,
  lastName: string,
  age: number,
}

// defining an object with a type
// the object needs to satisfy the constraints of the User interface
const elbert: User = {
  firstName: "Elbert",
  middleName: "Kaifong",
  lastName: "Cheng",
  age: 22,
}

// this object does not satisfy the constraints of the User interface
// throws a compile-time error
const alan: User = {
  firstName: "Alan",
  lastName: "Wen",
  age: "22",
}

// this function only accepts objects that adhere to the User interface
// provides certainty that some properties of user are known
function printGreeting(user: User) {
  // print a greeting to the user
  console.log(`Hello ${user.firstName} ${user.middleName} ${user.lastName}!`)

  // print the user's age and their age in a year
  console.log(`You are ${user.age} years old! Next year, you will be ${user.age + 1} years old!`)
}

printGreeting(elbert)
printGreeting(alan)