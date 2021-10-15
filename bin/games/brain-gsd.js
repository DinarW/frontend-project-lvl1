#!/usr/bin/env node
import { startGame, random, initResponse } from '../../src/index.js';

const initGame = startGame();
const [name, winningNumber] = initGame;
let CounterOfCorrectAnswers = initGame.pop();

console.log('Find the greatest common divisor of given numbers.');

do {
  let trueAnswer;
  const firstNumber = random(1, 100);
  const secondNumber = random(1, 100);

  for (let i = Math.min(firstNumber, secondNumber); i >= 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      trueAnswer = i;
      break;
    }
  }

  const Question = `${firstNumber} ${secondNumber}`;
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
