var inputNumber;
// Below calls the function to gather input from user
callPrompt();


// *************************************************************************
function callPrompt(){
  inputNumber = prompt("Please enter a whole number", "Enter number here");
  // After input recieved, call this function to test if it is valid
  validateNum(inputNumber);
}
// ************************************************************************
function validateNum(numIn){
	// Parse coverts string to a number if that is possible
  parseInt(numIn);
  // this "if" checks if the parse rurned a number or not, then if it was a decimal
  if (numIn == NaN || numIn % 1 != 0){
  	// If it does not pass, calls callPrompt again for new input
    callPrompt();
  }
  else {
  	// if test passed, call the FizzBang loop function
    fizzBang(numIn);
  }
}
// ***********************************************************************
function fizzBang(validNum){
  for( var i = 1; i <= validNum; i++){
      if ( i % 5 === 0 && i % 3 === 0) {
        $('.fizzbuzz').append("<li>FizzBuzz</li>");
        }
      else if ( i % 3 === 0) {
        $('.fizzbuzz').append('<li>Fizz</li>');
      }
      else if ( i % 5 === 0) {
        $('.fizzbuzz').append('<li>Buzz</li>');
      } 
      else {
        $('.fizzbuzz').append('<li>' + i + '</li>');
      }
    }
}