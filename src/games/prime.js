import { random, startGame } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.trunc(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createQuestAnswer = () => {
  const fromNumber = 0;
  const number = random(fromNumber);
  const trueAnswer = (isPrime(number) && (number !== 1)) ? 'yes' : 'no';
  const question = String(number);

  return [question, trueAnswer];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => startGame(task, createQuestAnswer);

export default brainPrime;
