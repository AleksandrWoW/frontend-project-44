import randomNumber from '../randomNumber.js';
import startGames from '../index.js';

const gamesDescrip = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = (number) => number % 2 === 0;
const generateRoundsData = () => {
  const meaning = randomNumber();
  const yesOrNo = even(meaning) ? 'yes' : 'no';
  return [meaning, yesOrNo];
};

export default () => {
  startGames(generateRoundsData, gamesDescrip);
};
