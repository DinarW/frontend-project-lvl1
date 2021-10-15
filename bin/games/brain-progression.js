#!/usr/bin/env node
import { startGame, random, initResponse } from '../../src/index.js';

const initGame = startGame();
const [name, winningNumber] = initGame;
let CounterOfCorrectAnswers = initGame.pop();

console.log('What number is missing in the progression?');

do {
  let trueAnswer;
  const startProg = random(1, 100);
  const stepProg = random(1, 10);
  const countElements = random(5, 10);
  const positionQuestion = random(1, countElements);
  const progression = [];
  let count = 1;

  for (let i = startProg; i <= startProg + stepProg * countElements; i += stepProg) {
    if (count !== positionQuestion) {
      progression.push(i);
      count += 1;
    } else {
      trueAnswer = i;
      progression.push('..');
      count += 1;
    }
  }

  const Question = progression.join(' ');
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
