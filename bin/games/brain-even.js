#!/usr/bin/env node
import { initResponse, random, startGame } from '../../src/index.js';

const initGame = startGame();
const [name, winningNumber] = initGame;
let CounterOfCorrectAnswers = initGame.pop();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

do {
  const number = random(1, 100);
  const trueAnswer = (number % 2 === 0) ? 'yes' : 'no';
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

  if (CounterOfCorrectAnswers === winningNumber) {
    console.log(`Congratulations, ${name}!`);
  }
} while (CounterOfCorrectAnswers !== winningNumber);
