// 1. Write a function called greetCustomer that will log "Welcome to the store" + the name parameter
function greetCustomer (name) {
    console.log(`Welcome to the store, ${name}`)
}
greetCustomer ('Jason')


// 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0

function logPositiveOrNegative (number) {
    if (number < 0) {
        console.log ('This number is negative'); 
    } else if (number > 0) {
        console.log('This number is positive');
    } else {
        console.log('This number is zero')
    }
}
logPositiveOrNegative(1);
logPositiveOrNegative(-1);
logPositiveOrNegative(0);

// 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"
function returnIsPositive (number) {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(returnIsPositive(5));  
console.log(returnIsPositive(-10));  
console.log(returnIsPositive(0));    

// 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters
function returnIsTooShort (password) {
    if (password.length < 8) {
        return true;
    } else {
        return false;
    }
}
console.log(returnIsTooShort("password"));  
console.log(returnIsTooShort("pass"));      
console.log(returnIsTooShort("1234567"));  

// 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"

function returnIsBreakingLaw (age, drink) {
    if (age < 21 && drink === "alcohol") {
        return true;
    } else {
        return false;
    }
}
console.log(returnIsBreakingLaw(20, "soda"));
console.log(returnIsBreakingLaw(22, "alcohol"));
console.log(returnIsBreakingLaw(19, "alcohol"));

// 6. Make a variable called count.
var count = 0

// Write a function called addToCount that will add the number parameter to the count variable.
// Call addToCount 4 times with different numbers
function addToCount(number) {
    count += number;
}
addToCount(5);
addToCount(10);
addToCount(-3);
addToCount(7);
console.log(count);

// 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true

function returnIsChase (name) {
    return name.toLowerCase() === "chase";
}
console.log(returnIsChase("Chase"));
console.log(returnIsChase("chAsE"));
console.log(returnIsChase("CHASE"));
console.log(returnIsChase("Jason"));


// 8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
var classArr = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];

// Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students 
function returnClassIsTooSmall (students) {
    return students.length < 10; 
}
console.log(returnClassIsTooSmall(classArr));

// 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined
var combineStrings = function(stringOne, stringTwo) {
    return stringOne + stringTwo;
}
// call this function 3 times with 6 strings.
console.log(combineStrings("Hello, ", "world!"));
console.log(combineStrings("Hello, my ", "name is Jason"));
console.log(combineStrings("JavaScript ", "is hard!!!!"));


// 10. Write a function called returnDataType that will return the datatype of the data parameter
function returnDataType(data) {
    return typeof data;
}
console.log(returnDataType("Hello, world!"));
console.log(returnDataType(42));
console.log(returnDataType(true));

// 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8
function addStudentToClass (student) {
    classArr.push(student);
}
// Call this function 2 times
addStudentToClass("Legolas");
console.log(classArr);
addStudentToClass("Arwen");
console.log(classArr);



// 12. VERY OPTIONAL - Make a variable called extraStudents. This should be an array with about 10 string names. 
var extraStudents = ["Jason", "Parul", "Maria", "Johnathan", "Sam", "Sataporn", "Zarema", "Bryan", "Sylvia", "Tesfaye", "Tony", "Bader", "Vitaliy", "Aldrich", "Simo", "Tri","Madina"]
// Write a function called fillClass that will loop until the class array has >= 15 students. Every loop one student should be put into the class array and taken out of the extraStudents array
function fillClass() {
    while (classArr.length >= 15 && extraStudents.length > 0) {
        var newStudent = extraStudents.shift();
        classArr.push(newStudent);
    }
}
fillClass();
console.log(classArr);
console.log(extraStudents);