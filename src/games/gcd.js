import { startGame, randomNumber } from '../index.js';

const findNOD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return findNOD(secondNumber, firstNumber % secondNumber);
};

const createQuestAnswer = () => {
  const firstNumber = randomNumber(1);
  const secondNumber = randomNumber(1);
  const trueAnswer = String(findNOD(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;

  return [question, trueAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => startGame(task, createQuestAnswer);
export default brainGCD;
