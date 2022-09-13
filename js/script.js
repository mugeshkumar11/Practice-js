/*addition
let a=10;
let b=25;
console.log(a+b);
*/
/*addition
let a=20;
let b=22;
console.log(a+=b);*/
/*multiplication
let a=10;
let b=30;
console.log(a*=b);*/
/*division
let a=20;
let b=10;
console.log(a/=b);*/
/*subtraction
let a=30;
let b=10;
console.log(a-=b);*/
/*calculate area of circle
let A=Math.PI*Math.pow(5,2);
console.log(A);*/
/*Area of triangle
let A=1/2*5*6;
console.log(A);*/
/*simple interest
let S=30*12*(12/100);
console.log(S);*/
/*CALCULATE SQUARE//
let S=Math.pow(10,2);
console.log(S);*/
/*calculate cube//
let C=Math.pow(12,3);
console.log(C);*/
//swap two numbers//
/*let a=10;
let b=20;
let c;
c=a;
a=b;
b=c;
console.log(a);
console.log(b);*/
// calculate average and total//
/*
var a=80;
var b=90;
var c=79;
var d=95;
var e=100;
var avg;
console.log(avg=(a+b+c+d+e)/5);*/

//larger number//
/*
var a=35;
var b=26;
var c=29;
var large=Math.max(a, b, c);
console.log(large);*/

//positive or not//
/*
let a=10;
if (a>=0){
    console.log('positive');
}
else {
    console.log('negative');
}
*/

//check  number is greaterthan10//
/*
let a=10;
let b=11;

console.log(a<b);*/

//number even or odd
/*
var number = prompt("10:");
if (number % 10==0){
    console.log("the number is even");
}
else{
    console.log("the number is odd");
}*/
//number divisible by 5//
/*
var number = prompt("30")
if (30 % 5 == 0) {
    console.log("30 is divisible by 5");
  }else {
    console.log("30 is not divisible by 5");
  }

*/
//multible of 7//
/*

if (7 % 7 == 0) {
    console.log("7 is multible by 7");
  }else {
    console.log("7 is not multible by 7");
  }
*/
//accending and decending order of 3 numbers//
/*var numbers = [10,20,30,40,50,60,70,80];

var highestnumb = numbers.sort((a,b)=>b-a);
var lowestnumb = numbers.sort((a,b)=>a-b);

console.log(lowestnumb);
console.log(highestnumb);*/

// quadratic equation//

/*
let root1, root2;


let a = prompt ("12");
let b = prompt ("13");
let c = prompt ("14");

let value = b * b - 4 * a * c;

if (value > 0) {
    root1 = (-b + Math.sqrt(value))/(2 * a);
    root2 = (-b - Math.sqrt(value))/(2 * a);

    console.log("{root1}{root2}");

}
*/

//grade based student mark//
/*
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}
*/
//program find marriage eligibility//
/*
var age=17;
function validate(age) {
    if (age>=18){
      console.log ("eligible")
    }
    else if (age<=18){
        console.log ("not eligible")
        
    }
}
console.log(validate(age));
*/

//n numbers in sequence//
/*
var  value= 16;

for (let i = 0; i < value ; i++) {
    console.log(Math.floor(i / 4) + 1); 
}
*/
//n number in reverse//
/*
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));
*/
// print n even numbers //
/*
var a=10;
for(i=0; i<=a; i++){
   
   
    if(a % 2 == 0){
      console.log(a);
    }
  }
  */
 // print n odd number//
/*
 var a=7;
for(i=0; i<=a; i++){
   
   
    if(a % 1 == 0){
      console.log(a);
    }
  }
*/

//print reverse of a number //
/*
let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);
*/

//calculate sum of a number//
/*
const num1 = 5;
const num2 = 3;

const sum = num1 + num2;
console.log(sum);
*/
//amstrong or not//

// program to check an Armstrong number of three digits
/*
let sum = 0;
var number = prompt('160');

let temp = number;
while (temp > 0) {
   
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
*/
//table of given number//
/*
var n = prompt("Enter the number", "10");
n = parseInt(n);

for(var i=1; i<=10; i++) 
{
  document.write(n*i);
  document.write("<BR>");

}
*/
//sum of given number //
/*
var value = 2568,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);
*/

//factorial number using for loop//
/*
var inputNumber = prompt('Please enter an integer');
var total = 1;

for (i = 0; i <= inputNumber; i++){
    total = total * (inputNumber - i);
}

console.log(inputNumber + '! = ' + total);
*/
//number is prime or not//
/*
function isPrime(num) {

  if (num === 2) {
    return true;
  } 
  else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } 
  else {
    return false;
  }

}

console.log(isPrime(121));
*/

//prime numbers within range//







