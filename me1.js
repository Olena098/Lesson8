const readline = require('readline');
const { breakdownArr } = require('./main2.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

function getUserInput() {
  rl.question('Enter "+" to generate a random array with its size, "-" to input your own array elements, or "q" to exit, or size of the array: ', (answer) => {
    const trimmedAnswer = answer.trim().toLowerCase();

    if (trimmedAnswer === '+') {
      rl.question('Enter the size of the array: ', (sizeInput) => {
        const size = parseInt(sizeInput);

        if (isNaN(size)) {
          console.log('Invalid array size.');
          getUserInput();
        } else {
          const randomArray = generateRandomArray(size); 
          console.log("Generated random array:", randomArray);
          const sortedArray = breakdownArr(randomArray);
          console.log("Sorted array:", sortedArray);
          rl.close();
        }
      });
    } else if (trimmedAnswer === '-') {
      rl.question('Enter numbers separated by space: ', (input) => {
        const unsortedArray = input.split(' ').map(Number);
        console.log('Array generated by you:', unsortedArray)
        const sortedArray = breakdownArr(unsortedArray);
        console.log("Sorted array:", sortedArray);
        rl.close();
      });
    } else if (trimmedAnswer === 'q') {
      rl.close();
    } else {
      console.log('Incorrect input. Enter "+" to generate a random array with its size, "-" to input your own array elements, or "q" to exit, or size of the array: ');
      getUserInput();
    }
  });
}

getUserInput();
