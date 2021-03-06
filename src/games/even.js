import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const createRound = () => {
  const number = getRandomNumber(0);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => playGame(task, createRound);

export default brainEven;
