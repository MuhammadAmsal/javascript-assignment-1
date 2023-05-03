// Q no 1

// var firstNum=+prompt("Write a First Number")
// var secondNum=+prompt("Write a Second Number")

// if(firstNum > secondNum ){
//     console.log(`greater number is` + " " + firstNum)
// }else if( secondNum > firstNum){
//     console.log(`greater number is` +" "+  secondNum)
// }


// Q no 2

// var number=+prompt("write a number")

// if(number > 0){
//     alert("the sign is +")
// }  else if (number < 0){
//     alert("the sign is -")
// }    

// Q no 3

// var num1=prompt("Write a first number")
// var num2=prompt("Write a second number")
// var num3=prompt("Write a third number")
// var num4=prompt("Write a fourth number")
// var num5=prompt("Write a fifth number")

// if(num1 > num2){
//     console.log(`greater value is` +" " + num1 )
// } else if(num2 > num3){
//     console.log(`greater value is` +" " + num2 )
// } else if (num3 > num4){
//     console.log(`greater value is `+ " " + num3)
// } else if(num4> num5){
//     console.log(`greater value is ` +" " + num4)
// }else if(num5>num1 || num5>num2 || num5>num3 || num5>num4){
//     console.log(`greater value is` +" " + num5)
// }

// Q no 4
 
// for (let i=0; i<=15; i++ ){
//      let xyz=i % 2
//     if(xyz == 0 ){
// console.log(i +" " + "is even" )
//     } else{
//      console.log (i + " " + "is odd")
//     }
//  }

// Q no 5 

// var number=+prompt("write your subject marks")

// if( number < 60  ){
// alert("your grade is F ")
// }else if ( number > 60 && number<70){
//     alert("your grade is D")
// }else if( number>70 && number < 80){
//     console.log("your grade is C")
// }else if (number>80 && number<90){
//     console.log("your grade is B")
// } else if (number>90 && number<100){
//     console.log("your grade is A")
// }


// Q no 6

// for (let i=0; i<=100; i++  ){
// let divide3=i%3
// let divide5=i%5

// if (divide3==0 && divide5==0) {
//     console.log("fizzbuzz")
// } else   if( divide3==0 || divide5==0 )
// console.log("Fizz")
//  else {
//     console.log(i)
// }
// }

// Q no 7

//   for (let i = 0; i < 5 ; i++) {
//     let star = '';

//   for (let  x= 0; x <= i; x++) {
      
//       star += '* ';
//     }
//   console.log(star);
// }


//recursion function

// let num=1
// let name=function first(a){
// if (num > a){
//     return
// }
// console.log(a)
// num++
// first(10)
// }
// name(2)