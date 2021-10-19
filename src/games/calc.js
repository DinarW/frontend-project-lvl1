import { randomNumber, startGame } from '../index.js';

const createAnswer = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      return null;
  }
};

const createQuestAnswer = () => {
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);
  const signs = ['+', '-', '*'];
  const sign = signs[randomNumber(0, 2)];
  const trueAnswer = createAnswer(firstNumber, secondNumber, sign);
  const question = `${firstNumber}${sign}${secondNumber}`;

  return [question, trueAnswer];
};

const task = 'What is the result of the expression?';

const brainCalc = () => startGame(task, createQuestAnswer);

export default brainCalc;
