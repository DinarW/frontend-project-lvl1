#!/usr/bin/env node
import { initResponse, startGame } from '../../src/index.js';

const name = startGame();
const winningNumber = 3;
let CounterOfCorrectAnswers = 0;

console.log('What is the result of the expression?');

do {
  let sign;
  let trueAnswer;
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const randomSign = Math.floor(Math.random() * 3);

  if (randomSign === 0) {
    sign = ' + ';
    trueAnswer = firstNumber + secondNumber;
  } else if (randomSign === 1) {
    sign = ' - ';
    trueAnswer = firstNumber - secondNumber;
  } else {
    sign = ' * ';
    trueAnswer = firstNumber * secondNumber;
  }

  const Question = `${firstNumber}${sign}${secondNumber}`;
  const Response = initResponse(Question, trueAnswer);

  if (Response) {
    CounterOfCorrectAnswers += 1;
  } else {
    console.log(`Let's try again, ${name}!`);
    break;
  }
} while (CounterOfCorrectAnswers !== winningNumber);
