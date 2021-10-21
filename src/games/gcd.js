import { startGame, getRandomNumber } from '../index.js';

const findGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return findGCD(secondNumber, firstNumber % secondNumber);
};

const createRound = () => {
  const firstNumber = getRandomNumber(1);
  const secondNumber = getRandomNumber(1);
  const correctAnswer = String(findGCD(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;

  return [question, correctAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => startGame(task, createRound);
export default brainGCD;
