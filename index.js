// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else {
        return false;
    }

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("ElonMusk.com"));
console.log(isValidEmail("Zuckerborg@MediaMetadata.com"));