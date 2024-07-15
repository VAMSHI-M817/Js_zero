
const users = [
  {
    id: 1,
    uname: "shivani",
    email: "vamshi@gmail",
  },
  {
    id: 2,
    uname: "vamshi",
    email: "vamshi@gmail",
  },
  {
    id: 3,
    uname: "shiva",
    email: "shiva@gmail",
  },
  {
    id: 4,
    uname: "raju",
    email: "raju@gmail",
  },
];

users.filter(filtering)

function filtering(eachItem) {
  const { id, uname, email } = eachItem
  eachItem.id % 2 === 0 ? console.log(uname) : false
}


class Person {
  constructor(firstName, lastName, fullName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function () {
      return this.firstName + this.lastName
    }
  }

  sample(fullName) {
    console.log(fullName)
  }
  



}
const vamshi = new Person("vamshi", "Marepu")