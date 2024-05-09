import randomNumber from '../randomNumber.js';
import startGames from '../index.js';

  const gamesDescrip = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => number % 2 === 0;

  const randomMath = () => {
    const even = randomNumber();
    const evenOrOdd = isEven(even) ? 'yes' : 'no';
    return [even, evenOrOdd];
  };
  
  export default () => {
    startGames(randomMath, gamesDescrip);
  };