/* 
Group Members
Joshua Makula
Julius Wasajja
Queen Emily
Trevor Kakuba

  Fibonacci numbers are numbers obtained by adding the two previous numbers in the sequence to obtain the next higher number.
  Example: 1+1= 2, 2+3= 5, 5+8= 13...
  The formula is: Fn = Fn-1 + Fn-2
*/
  function fibonacci(number) {
    if (number <= 1) 
      return 1;
    
  // Next fibonacci number = previous + one before previous
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
  // console.log(fibonacci(10));

  module.exports = fibonacci(10);
 

