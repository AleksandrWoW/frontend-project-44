import randomNumber from '../randomNumber.js';
import startGames from '../index.js';

  const isEven = (number) => number % 2 === 0;

  const randomMath = () => {
    const even = randomNumber();
    const evenOrOdd = isEven(even) ? 'yes' : 'no';
    return [even, evenOrOdd];
  };
  
  export default () => {
    startGames(randomMath);
  };