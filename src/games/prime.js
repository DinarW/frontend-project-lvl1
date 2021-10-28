import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (num) => {
  if ((num === 0) || (num === 1)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createRound = () => {
  const number = getRandomNumber(0);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => playGame(task, createRound);

export default brainPrime;
