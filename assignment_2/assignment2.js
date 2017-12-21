// Exercise #1
// Write your solution below

//array to keep values.
var counter = 1;
var hash = "#"

while (counter <8){
    console.log(hash.repeat(counter));
    counter += 1;
}

/* 
Write your explanation for Exercise #1 here

Before using the while loop I've tried to do that with a for loop and also using while and making the
counter a array but it wouldn't give the exact answer, then I search how could I repeat a string and I found the
repeat function and then I applied my variables and used the += to increase and reassign a value to my counter inside 
the loop.

*/

// Exercise #2
// Write your solution below

function isEven(number){
    if (number % 2 == 0){
        console.log(number + " is even!")
    }else{
        console.log(number + " is odd!")
    };

}

isEven(7);

/* 
Write your explanation for Exercise #2 here

For this function I thought about how would I determine that a number would be even or odd, so I knew it that if
a number is even divided by 2 the result should be a integer and the result would be 0, then I applied that to the
if statement with the conditions being the console log, printing the numbers and if they are odd or even.

*/
