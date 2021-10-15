#!/usr/bin/env node
import { initResponse, random, startGame } from '../../src/index.js';

const initGame = startGame();
const [name, winningNumber] = initGame;
let CounterOfCorrectAnswers = initGame.pop();

console.log('What is the result of the expression?');

do {
  let sign;
  let trueAnswer;
  const firstNumber = random(1, 100);
  const secondNumber = random(1, 100);
  const randomSign = random(0, 2);

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
    if (CounterOfCorrectAnswers === winningNumber) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  } else {
    console.log(`Let's try again, ${name}!`);
    break;
  }
} while (CounterOfCorrectAnswers !== winningNumber);
