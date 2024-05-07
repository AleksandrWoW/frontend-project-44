import readlineSync from 'readline-sync';
import randomNumber from './randomNumber.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (number) => number % 2 === 0;

  const randomMath = () => {
    const even = randomNumber();
    const evenOrOdd = isEven(even) ? 'yes' : 'no';
    return [even, evenOrOdd];
  };
  for (let i = 0; i < 3; i += 1) {
    const roundData = randomMath();
    const [even, evenOrOdd] = roundData;
    console.log(`Question: ${even}`);
    const youAnswer = readlineSync.question('Your answer: ');

    if (youAnswer !== evenOrOdd) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};