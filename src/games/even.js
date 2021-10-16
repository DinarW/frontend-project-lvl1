import { random, startGame } from '../index.js';

const createQuestAnswer = () => {
  const fromNumber = 0;
  const number = random(fromNumber);
  const trueAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const question = String(number);

  return [question, trueAnswer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => startGame(task, createQuestAnswer);

export default brainEven;
