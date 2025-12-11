// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array
//                   spread = expands an array into separate elements
//                   rest = bundles seperate elements into an array

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "John Vincent", "Espinosa", "III");

console.log(fullName);