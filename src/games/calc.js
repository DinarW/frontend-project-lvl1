import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const calculateAnswer = (firstNumber, secondNumber, sign) => {
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
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const correctAnswer = calculateAnswer(firstNumber, secondNumber, sign);
  const question = `${firstNumber} ${sign} ${secondNumber}`;

  return [question, correctAnswer];
};

const task = 'What is the result of the expression?';

const brainCalc = () => playGame(task, createRound);

export default brainCalc;
