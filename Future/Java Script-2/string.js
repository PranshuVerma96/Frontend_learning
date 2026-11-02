const name = "pranshu";
const repoCount = 30;

// console.log(name + repoCount + " value");

console.log(`hellow my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("hiteshhc");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase()); // this is not change orignal value

console.log(gameName);

const another = gameName.slice(0, 4);
console.log(another);

const newstr = gameName.substring(0, 6);

console.log(newstr);

const newstr2 = "    hitesh   ";
console.log(newstr2);
console.log(newstr2.trim());

// console.log();

const url = "https://hitesh.com./hitesh";
console.log(url.replace("hitesh", "pranshu"));
console.log(url);

console.log(url.includes("pranshu"));

console.log(gameName.split("-"));

const mystr = "this is my first string.";
console.log(mystr.split(" ")); // converted into new array based on its parameter
