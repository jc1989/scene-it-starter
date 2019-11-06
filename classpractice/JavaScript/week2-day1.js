//Iterating over an array

// function iterate(myArray){
//     for (let i = 0; i < myArray.length;i++){
//         let currentArrayItem = myArray[i];

//         console.log(currentArrayItem)
//     }
// }

// let fruits = ['apples','bananas','oranges']

//fruits[0]

//iterate(fruits)

//Set breakpoints, and use debugger. Step through the program to see how it works.

//Accumulating over an array

// function accumulate(array){
//     var count = 0;

//     for (var i = 0; i < array.length;i++){
//         var currentItem = array[i];
//         count += currentItem;
//     }

//     return count;
// }

//Searching for one item in an array
//Use an if statement in your for loop to check each array item

function search(haystack,needle){
    var foundIndex = -1; //- 1 is not an index in an array, so return it so that we know its outside of array

    for (var i = 0;i < haystack.length;i++){
        var currentItem = haystack[i];
        if(currentItem == needle){
            foundIndex = i;
        }
    }
    return foundIndex;
}

var haystack = ['needle', 'wood','grass']

console.log(search(haystack, 'needle'))

//Given an array of peoples names

function names(nameArray){
    for (var i = 0; i < nameArray.length; i++){
        let currentIndex = nameArray[i]
    console.log("Hi, " + currentIndex + "!")
    }
}

var nameArray = ['Lachlan', 'Kim', 'Moira']

names(nameArray);

//Given an array of first, middle, and last name

let fullName = ['Adam','Michael','Scott'];
let initialArray = [];

function initials(thing){
    for (var i = 0; i < thing.length; i++){
        initialArray.push(thing[i].charAt(0))

    }
    console.log(initialArray)
}
initials(fullName)

//Given a list of 0's and 1's, return the index of the last 1 in the array

let numbers = ['0','1','0','1','1','1','0','0']

function lastOne(){
    for (var i = numbers.length -1; i >= 0; i--){
        let currentIndex = numbers[i];
        if(currentIndex == '1'){
            console.log(i);
            break;
        }
    }
}

lastOne(numbers);

//List of positive numbers
let biggestNumber = 0;
let pos = [1,5,25,3,99,20];

function positive(num){
    for (let i = 0; i < num.length; i++){
        if(num[i] > biggestNumber){
            biggestNumber = num[i];
        }
    }
    console.log(biggestNumber);
}

positive(pos);

//Given an array of students birth years, return the most common birth year
birth = 0;
birthArray = ['1991', '1984','1984','1989']

// function birthYear(year){
//     for(let i = 0; i < year.length;i++){
//         if(year[i] = )
//     }
// }