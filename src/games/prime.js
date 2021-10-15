import { random, startGame } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.trunc(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const winningNumber = 3;
  const questions = [];
  const trueAnswers = [];

  for (let i = 0; i < winningNumber; i += 1) {
    const number = random(1, 100);
    trueAnswers.push((isPrime(number) && (number !== 1)) ? 'yes' : 'no');
    questions.push(String(number));
  }
  startGame(task, questions, trueAnswers);
};

export default prime;
