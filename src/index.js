import readlineSync from 'readline-sync';

export default (randomMath, gamesDescrip) => {

  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  console.log(gamesDescrip);

  for (let i = 0; i < 3; i += 1) {
    const random = randomMath();
    const [even, evenOrOdd] = random;
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