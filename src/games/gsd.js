import { startGame, random } from '../index.js';

const findNOD = (num1, num2) => {
  let NOD;
  for (let i = Math.min(num1, num2); i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      NOD = i;
      break;
    }
  }
  return NOD;
};

const gsd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const trueAnswers = [];
  const winningNumber = 3;

  for (let i = 0; i < winningNumber; i += 1) {
    const firstNumber = random(1, 100);
    const secondNumber = random(1, 100);

    if (Math.min(firstNumber, secondNumber) === 0) {
      trueAnswers.push('1');
    } else {
      trueAnswers.push(findNOD(firstNumber, secondNumber));
    }

    questions.push(`${firstNumber} ${secondNumber}`);
  }

  startGame(task, questions, trueAnswers);
};

export default gsd;
