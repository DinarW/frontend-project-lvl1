import { getRandomNumber, startGame } from '../index.js';

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

const createRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomNumber(0, 2)];
  const correctAnswer = createAnswer(firstNumber, secondNumber, sign);
  const question = `${firstNumber} ${sign} ${secondNumber}`;

  return [question, correctAnswer];
};

const task = 'What is the result of the expression?';

const brainCalc = () => startGame(task, createRound);

export default brainCalc;
