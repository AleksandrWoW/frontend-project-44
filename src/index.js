import readlineSync from 'readline-sync';

export default (generateRounds, gamesDescrip) => {

  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  console.log(gamesDescrip);

  for (let i = 0; i < 3; i += 1) {
    const random = generateRounds();
    const [meaning, yesOrNo] = random;
    console.log(`Question: ${meaning}`);
    const youAnswer = readlineSync.question('Your answer: ');

    if (youAnswer !== yesOrNo) {
      console.log(`${youAnswer} is wrong answer ;(. Correct answer was ${yesOrNo}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);

};