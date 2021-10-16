import { startGame, random } from '../index.js';

const findNOD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return findNOD(secondNumber, firstNumber % secondNumber);
};

const createQuestAnswer = () => {
  const fromNumber = 0;
  const firstNumber = random(fromNumber);
  const secondNumber = random(fromNumber);
  let trueAnswer;

  if (Math.min(firstNumber, secondNumber) === 0) {
    trueAnswer = '1';
  } else {
    trueAnswer = findNOD(firstNumber, secondNumber);
  }

  const question = `${firstNumber} ${secondNumber}`;

  return [question, trueAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => startGame(task, createQuestAnswer);
export default brainGCD;
