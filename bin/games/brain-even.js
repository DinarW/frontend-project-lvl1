#!/usr/bin/env node
import { initResponse, startGame } from '../../src/index.js';

const name = startGame();
const winningNumber = 3;
let CounterOfCorrectAnswers = 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

do {
  const number = Math.floor(Math.random() * 100) + 1;
  const trueAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const Question = String(number);
  const Response = initResponse(Question, trueAnswer);

  if (Response) {
    CounterOfCorrectAnswers += 1;
  } else {
    console.log(`Let's try again, ${name}!`);
    break;
  }

  if (CounterOfCorrectAnswers === winningNumber) {
    console.log(`Congratulations, ${name}!`);
  }
} while (CounterOfCorrectAnswers !== winningNumber);
