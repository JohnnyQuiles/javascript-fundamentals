const x = 6

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function q7(y, z) {
    return x + y + z;
}
console.log(q7(1, 1));

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const q8 = (y, z) => {
    return x + y + z;
}
console.log(q8(2, 2));

// 9. Write a function that returns another function. (use arrow functions please)
const q9 = () => {
    return "hi";
}

const returnQ9Hi = () => {
    return q9();
}
console.log("result:", returnQ9Hi());

// 10. given the following code:


const getFunction = () => {
    const y = 5;

    const insideFunc = (a) => y + a;

    return insideFunc;
};

console.log(getFunction()(2))

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.

// ANSWER: Y is defined in main function and its being included in closure 


// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {

    if (Math.ceil(Math.random() * 2) < 2) {
        throw new Error("Error was thrown");
    }
    return 'success'
}

const checkError = (callback) => {
    try {
        console.log(callback());
    } catch (error) {
        console.log('Error bro');
    }
}
checkError(couldThrowError);
