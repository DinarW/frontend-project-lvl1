import { random, startGame } from '../index.js';

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  const questions = [];
  const trueAnswers = [];
  const winningNumber = 3;

  for (let i = 0; i < winningNumber; i += 1) {
    let sign;
    const fromNumber = 0;
    const firstNumber = random(fromNumber);
    const secondNumber = random(fromNumber);
    const randomSign = random(fromNumber, 2);

    if (randomSign === 0) {
      sign = ' + ';
      trueAnswers.push(firstNumber + secondNumber);
    } else if (randomSign === 1) {
      sign = ' - ';
      trueAnswers.push(firstNumber - secondNumber);
    } else {
      sign = ' * ';
      trueAnswers.push(firstNumber * secondNumber);
    }
    questions.push(`${firstNumber}${sign}${secondNumber}`);
  }
  startGame(task, questions, trueAnswers);
};

export default brainCalc;
