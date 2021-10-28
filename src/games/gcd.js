import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const findGCD = (numOne, numTwo) => ((!numTwo) ? numOne : findGCD(numTwo, numOne % numTwo));

const createRound = () => {
  const firstNumber = getRandomNumber(1);
  const secondNumber = getRandomNumber(1);
  const correctAnswer = String(findGCD(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;

  return [question, correctAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => playGame(task, createRound);
export default brainGCD;
