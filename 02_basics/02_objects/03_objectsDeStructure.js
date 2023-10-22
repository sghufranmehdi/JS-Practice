// Objects De-Structure and Json API

const course = {
  courseName: "CS",
  price: 999,
  courseInstructor: "Ghufran",
};

// console.log(course.courseInstructor);

// const { courseInstructor } = course; // from now on you dont need to type course.courseInstructor just type courseInstructor
// console.log(courseInstructor);

const { courseInstructor: instructor } = course; // using : as alias
console.log(instructor);

// API Concepts => API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other.

// 1. JSON => keys are also declaired as a String
// link for sample json => https://api.github.com/users/hiteshchoudhary

// {
//   "name" : "Ghufran",
//   "courseName" : "CS in Urdu",
//   "price" : "free"
// }

// 2. Array
[{}, {}, {}, {}];
