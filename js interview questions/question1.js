// equality

function greet(person) {
  if (person == { name: "Sachin" }) {
    return "hey Sachin";
  } else {
    return "hey Dhoni";
  }
}
console.log(greet({ name: "Sachin" }));

// I want this code to log out "hey amy", but it logs out "hey arnold" - why?

// strict mode
