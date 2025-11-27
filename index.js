// string slicing = creating a substring
//                  from a potion of another string

//                  string.slice(start, end)

const email = "johnvincentespinosa1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
