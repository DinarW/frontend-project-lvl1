import { getRandomNumber, startGame } from '../index.js';

const createAnswer = (num) => {
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const createRound = () => {
  const number = getRandomNumber(0);
  const correctAnswer = createAnswer(number);
  const question = String(number);

  return [question, correctAnswer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => startGame(task, createRound);

export default brainEven;
