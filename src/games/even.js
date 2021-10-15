import { random, startGame } from '../index.js';

const brainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const trueAnswers = [];
  const winningNumber = 3;

  for (let i = 0; i < winningNumber; i += 1) {
    const number = random(1, 100);
    trueAnswers.push((number % 2 === 0) ? 'yes' : 'no');
    questions.push(String(number));
  }

  startGame(task, questions, trueAnswers);
};

export default brainEven;
