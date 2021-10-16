import { startGame, random } from '../index.js';

const findNOD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return findNOD(secondNumber, firstNumber % secondNumber);
};

const brainGsd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const trueAnswers = [];
  const winningNumber = 3;
  const fromNumber = 0;

  for (let i = 0; i < winningNumber; i += 1) {
    const firstNumber = random(fromNumber);
    const secondNumber = random(fromNumber);

    if (Math.min(firstNumber, secondNumber) === 0) {
      trueAnswers.push('1');
    } else {
      trueAnswers.push(findNOD(firstNumber, secondNumber));
    }

    questions.push(`${firstNumber} ${secondNumber}`);
  }

  startGame(task, questions, trueAnswers);
};

export default brainGsd;
