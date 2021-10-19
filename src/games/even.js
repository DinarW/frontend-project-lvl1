import { randomNumber, startGame } from '../index.js';

const createAnswer = (num) => {
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const createQuestAnswer = () => {
  const number = randomNumber(0);
  const trueAnswer = createAnswer(number);
  const question = String(number);

  return [question, trueAnswer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => startGame(task, createQuestAnswer);

export default brainEven;
