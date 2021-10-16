import { random, startGame } from '../index.js';

const createQuestAnswer = () => {
  let sign;
  const fromNumber = 0;
  const firstNumber = random(fromNumber);
  const secondNumber = random(fromNumber);
  const randomSign = random(fromNumber, 2);
  let trueAnswer;

  if (randomSign === 0) {
    sign = ' + ';
    trueAnswer = firstNumber + secondNumber;
  } else if (randomSign === 1) {
    sign = ' - ';
    trueAnswer = firstNumber - secondNumber;
  } else {
    sign = ' * ';
    trueAnswer = firstNumber * secondNumber;
  }
  const question = `${firstNumber}${sign}${secondNumber}`;

  return [question, trueAnswer];
};

const task = 'What is the result of the expression?';

const brainCalc = () => startGame(task, createQuestAnswer);

export default brainCalc;
