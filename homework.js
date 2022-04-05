/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function question1 (int1, int2) {
    if (int1 !== int2) {
        return int1 + int2;
    }
    if (int1 === int2) {
        return (int1 + int2) * 3;
    }
}
// console.log(question1(5, 5))
// console.log(question1(5, 6))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function question2 (num1, num2) {
    if (num1 === 50 || num2 === 50) {
        return true;
    }
    if (num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}

// console.log(question2(10, 25))
// console.log(question2(50, 25))
// console.log(question2(25, 25))
// console.log(question2(100, 51))
// console.log(question2(49, 1))



/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
let sentence = "My name is Leon"


function question3(index, str) {
    return str.substring(0, index) + str.substring(index + 1);
}

console.log(question3(5, "Will this thing work this time"))
console.log(question3(9, "The magic machine works"))
console.log(question3(11, "We've done it again"))
console.log(question3(55, "Not an easy programme to make"))

/*

4)
 Create a function to find the largest of three given integers.
*/
function question4(int1, int2, int3) {
    if (int1 > int2) {
        if (int1 > int3) {
            return "int1 is largest";
        }
    }
    if (int2 > int3) {
        return "int2 is largest";
    }
    return "int3 is largest";
}
// console.log(question4(3, 5, 9))
// console.log(question4(3, 15, 9))
// console.log(question4(300, 5, 9))
// console.log(question4(33, 5, 9))
// console.log(question4(3, 45, 9))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function question5 (num1, num2) {
    if (((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))) {
        return "In the range";
    } else {
        return "Out of range";
    }
}

// console.log(question5(56, 77))
// console.log(question5(4, 77))
// console.log(question5(40, 100))
// console.log(question5(30, 77))
// console.log(question5(50, 77))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
let givenString = "This is the string to multiply";

function question6(number) {
    for (let i = 0; i < number; i++) {
        console.log(givenString)
    }
}

// question6(4);
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function question7(str) {
    if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New") {
        return str;
    } else {
        return "";
    }
}

// console.log(question7("Los Angeles"))
// console.log(question7("Limerick"))
// console.log(question7("New York"))
// console.log(question7("Dublin"))
// console.log(question7("Los Santos"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

function question8(arr) {
    let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
}

// console.log(question8([3, 5, 7]))
// console.log(question8([13, 15, 17]))
// console.log(question8([23, 25, 27]))
// console.log(question8([3, 4, 9]))
// console.log(question8([2, 53, 11]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function question9(arr) {
    if ((arr[0] === 1 || arr[0] === 3) || (arr[1] === 1 || arr[1] === 3)) {
        return "Contains a 1 or 3"
    } else {
        return "Does not contain a 1 or 3"
    }
}
// console.log(question9([1, 3]))
// console.log(question9([3, 4]))
// console.log(question9([11, 55]))
// console.log(question9([12, 3]))
// console.log(question9([11, 33]))
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/
function question10(arr) {
    if ((arr[0] !== 1 && arr[0] !== 3) && (arr[1] !== 1 & arr[1] !== 3)) {
        return "Does not contain a 1 or 3"
    } else {
        return "Does contain a 1 or 3"
    }
}

// console.log(question10([1, 3]))
// console.log(question10([11, 33]))
// console.log(question10([2, 4]))
// console.log(question10([13, 13]))
// console.log(question10([14, 3]))

/*

11)

Create a function to find the longest string from a given array of strings.
*/

let arrayOfStrings = ["My name is leon", "Will this be the longest string of all", "Or will this string be longer", "I think this will be the longest string of all. i hope it is."]

function question11() {
    let longestString = "";
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > longestString.length) {
            longestString = arrayOfStrings[i];
        }
        
    }
    return longestString;
}

// console.log(question11())

/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
function question13(arr) {
    let index = 0;
    let largestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
            index = i;
        }
    }
    return index;
}
// console.log(question13([12, 13, 112, 19, 45, 66]))
// console.log(question13([122, 13, 112, 19, 445, 66]))
// console.log(question13([12, 13, 112, 189, 45, 66]))
// console.log(question13([12, 13, 1182, 19, 45, 66]))
// console.log(question13([12, 18883, 112, 19, 45, 699996]))



/*
14)

Create a function to get the largest even number from an array of integers.
*/
function question14(arr) {
    let largestEvenNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0){
            if (arr[i] > largestEvenNumber) {
                largestEvenNumber = arr[i];
            }
        }
    }
    return largestEvenNumber;
}

// console.log(question14([2, 4, 19, 9999999999, 1200, 200]))
// console.log(question14([2, 4000, 19, 9999999999, 1200, 200]))
// console.log(question14([299999990, 4, 19, 9999999999, 1200, 200]))
// console.log(question14([2, 421212121212, 19, 9999999999, 1200, 200]))
// console.log(question14([2, 4, 122222222222222222229, 9999999999, 1200, 200]))
/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
function question16(int1, int2) {
    let output = ''
    if (int1 % 2 === 0) {
        output += "int1 is even "
    } else {
        output += "int1 is odd "
    }
    if (int2 % 2 === 0) {
        output += "and int2 is even"
    } else {
        output += "and int2 is odd"
    }
    return output;
}

// console.log(question16(2, 4))
// console.log(question16(1, 3))
// console.log(question16(5, 6))
// console.log(question16(11, 13))
// console.log(question16(222, 444))
/*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function question17(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    let lowerCase = str.substring(0, 3).toLowerCase();
    let upperCase = str.substring(3).toUpperCase();
    return lowerCase + upperCase;

}

// console.log(question17("he"))
// console.log(question17("The very long sentence"))
// console.log(question17("jhfdslakjfhliweur"))
// console.log(question17("FDLFHLKSADJHDKLSG"))
// console.log(question17("Hello, here we are again"))
/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

*/
function question18(int1, int2) {
    let result = int1 + int2;
    if ((result >= 50) && (result <= 80)) {
        return 65;
    } else {
        return 80;
    }
}

// console.log(question18(5, 5))
// console.log(question18(55, 5))
// console.log(question18(75, 5))
// console.log(question18(50, 10))
// console.log(question18(115, 5))
/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
function question19(number) {
    let output = ""
    if (number % 3 === 0) {
        output += "Diego "
    }
    if (number % 5 === 0) {
        output += "Riccardo "
    }
    if (number % 7 === 0) {
        output += "Stefano "
    }
    if (output === '') {
        return number;
    } else {
        return output

    }
}
// console.log(question19(100))
// console.log(question19(30))
// console.log(question19(99))
// console.log(question19(55))
// console.log(question19(11))
// console.log(question19(9))
// console.log(question19(21))
/*
/
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
function question20(str) {
    let arrString = str.split(" ")
    let acronym = ''
    for (let i = 0; i < arrString.length; i++) {
        acronym += arrString[i][0]
    }
    return acronym.toUpperCase();
    
}

// console.log(question20("Hey my name is leon"))
// console.log(question20("Does this thing work"))
// console.log(question20("British Broadcasting Corporation"))
// console.log(question20("Creating a function"))
// console.log(question20("Creating an acronym function"))