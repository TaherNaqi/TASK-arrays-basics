let emptyArray = [];
let hobbies = [
  "Coding",
  "Playing video games",
  "Going out with friends",
  "Watching TV series",
  "Researching",
  "Watching Youtube",
];
let favNums = [7, 10, 77, 33, 20];
console.log(favNums[1]);
console.log(hobbies[hobbies.length - 1]);
//Fake Hobby:
hobbies.push("doing nothing");
//removing last two elements in the array:
console.log(hobbies[hobbies.length - 1]);
hobbies.pop(hobbies[hobbies.length - 1]);
hobbies.pop([hobbies.length - 1]);
console.log(hobbies.length);
//Emptying Array:
while (hobbies.length > 0) {
  hobbies.pop();
}
console.log(hobbies);
