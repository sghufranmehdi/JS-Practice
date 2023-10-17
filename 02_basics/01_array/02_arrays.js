// GO to console
const myArr = [1, 2, 3, 4];
//expand and you will see a prototype tab

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Batman", "Flash"];

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); // create an array of dc_Heroes within marvelHeroes
// [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'batman', 'Flash' ] ]
console.log(marvelHeroes[3][1]); //Selecting 1st index element of 3 index element(array)

const newMarvelHeroes = ["Thor", "Ironman", "Spiderman"];
const allHeroes = newMarvelHeroes.concat(dcHeroes);
console.log(allHeroes);
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

// Spread Operator
const allNewHeroes = [...newMarvelHeroes, ...dcHeroes];
console.log(allNewHeroes);
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

// flat() method
const complexArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realComplexArray = complexArray.flat(Infinity); //flat() => return a new array with all the subArray elemnts
console.log(realComplexArray);

console.log(Array.isArray(["Ghufran", "Mehdi"])); //true
console.log(Array.isArray("Ghufran")); //false
console.log(Array.from("Ghufran")); // created this string into character array

console.log(Array.from({ name: "Ghufran" })); // returns [] => Confused in converting key or value in an array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
