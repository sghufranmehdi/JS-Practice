// 2. Constructor (Singleton => single object of its type)
const tinderUser = new Object(); //Singleton Obj
tinderUser.id = "123abc";
tinderUser.name = "Ghufran";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
  email: "some@email.com",
  fullname: {
    userFullName: {
      firstName: "Ghufran",
      lastname: "Mehdi",
    },
  },
};

//access through nesting
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.firstName);

//Combining objects
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};

// const obj3 = { obj1, obj2 }; // shows as objects within object { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj4 = Object.assign(obj1, obj2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5 = Object.assign({}, obj1, obj2, obj3); // Object.assign(target, source) => source value come into target.
//In above this case Empty Array act as a target and other acts as a source that should be moved towards target

const obj6 = { ...obj1, ...obj2, ...obj3 }; // using spread operator

console.log("Object4: ", obj4);
console.log("Object5: ", obj5);
console.log("Object6: ", obj6);

const users = [
  {
    id: 1,
    email: "Ghufran@email.com",
  },
  {
    id: 2,
    email: "Mehdi@email.com",
  },
  {
    id: 3,
    email: "Muhammad@email.com",
  },
];

console.log(users[1].email); //users first element is an object

console.log(tinderUser);

// Both Outputs in the form of Array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array in the form of keyvalue => [ [ 'id', '123abc' ], [ 'name', 'Ghufran' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to check if object has this property or not (exact value matching)
