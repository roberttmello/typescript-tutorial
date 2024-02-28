let myName: string = "Carlos Robert";
console.log(myName);

//typescript doesn't like this 👇
//myName = 42;

let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let cpf: string | number;

meaningOfLife = 42;
isLoading = true;

// That's is strange right? 👇😲 In some cases this is necessary!
album = "something";
album = 42;
album = true;

// The union type in action
cpf = "123.456.789-98";
cpf = 12345678998;

let postId: string | number; 
let isActive: boolean | number; 

/* This is not allowed my friend, must be defined a type for the function parameters 😎
const sum1 = (a, b) => {
  return a + b;
};
*/

// 👍👍👍 That function return a number
const sum2 = (a: number, b: number) => {
  return a + b;
};

// 👍👍👍 That function return a string
const sum3 = (a: number, b: string) => {
  return a + b;
};

let re: RegExp = /\w+/g;