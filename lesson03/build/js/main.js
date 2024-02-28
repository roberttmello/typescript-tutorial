"use strict";
console.log("Lesson 03 😎");
// Arrays
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixData = ["cpf", 1995, false, null, undefined];
// Error
// stringArr[0] = 42
// stringArr.push(42)
stringArr.push("four");
stringArr[0] = "zero";
let anyArr = [];
let testArr = [];
let bands = [];
anyArr.push(true);
anyArr.push("username");
anyArr.push(42);
anyArr.push(null);
testArr.push(42);
testArr.push(true);
// Error
// testArr.push("username");
bands.push("Guns and Roses");
// Error
// bands.push(10);
// Tuples
let myTuple = ["Carlos", 28, true];
let mixed = ["Robert", 28, true];
// Error
// myTuple = mixData;
mixed = myTuple;
// Error
// myTuple[0] = 42
myTuple[1] = 32;
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const myExampleObject = {
    name: "Robert",
    age: 28,
    isActive: true,
};
myExampleObject.name = "Joe";
let evh = {
    name: "Eddie",
    active: true,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    albums: ["I", 174, "THESOUL"],
};
let another = {
    albums: ["I", 174, "THESOUL"],
};
// evh = jp;
const greetGuitarist = (musician) => {
    var _a;
    if (musician.name) {
        return `Hello ${(_a = musician.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()}!🎸`;
    }
    return "Hello 😎";
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));
console.log(greetGuitarist(another));
// Enums
/* Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and
runtime.
*/
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
})(Grade || (Grade = {}));
console.log(Grade.A);
console.log(Grade.E);
