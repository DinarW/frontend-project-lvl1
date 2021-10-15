#!/usr/bin/env node
import { initResponse, random, startGame } from '../../src/index.js';

const initGame = startGame();
const [name, winningNumber] = initGame;
let CounterOfCorrectAnswers = initGame.pop();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

do {
  const number = random(1, 100);
  let isPrime = true;
  for (let i = 2; i <= Math.trunc(Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  const trueAnswer = (isPrime && (number !== 1)) ? 'yes' : 'no';
  const Question = String(number);
  const Response = initResponse(Question, trueAnswer);

  if (Response) {
    CounterOfCorrectAnswers += 1;
    if (CounterOfCorrectAnswers === winningNumber) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  } else {
    console.log(`Let's try again, ${name}!`);
    break;
  }
} while (CounterOfCorrectAnswers !== winningNumber);
