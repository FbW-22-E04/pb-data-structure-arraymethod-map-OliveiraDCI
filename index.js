// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
  let arr = str.split("-");
  let result = [];
  let words = arr.forEach((el) => {
    el === "" ? null : result.push(el[0].toUpperCase() + el.substring(1));
  });
  let firstLetter = result[0][0].toLowerCase();
  let camelCase = firstLetter + result.join("").substring(1);
  return camelCase;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];
let usersMapped = [];

function mapArray(usersArr) {
  usersMapped = usersArr.map((obj) => {
    const string = JSON.stringify(obj);
    const parse = JSON.parse(string);
    return parse;
  });
  usersMapped.map((obj) => {
    obj.fullName = Object.values(obj)[0] + " " + Object.values(obj)[1];
    delete obj.name;
    delete obj.surname;
  });
  return usersMapped;
}

mapArray(users);
console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
