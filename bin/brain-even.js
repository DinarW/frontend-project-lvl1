#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const name = welcome();
const winningNumber = 3;
let CounterOfCorrectAnswers = 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

do {
  const number = Math.floor(Math.random() * 100) + 1; // формируем случайное целое число от 1 до 100
  const TrueAnswer = (number % 2 === 0) ? 'yes' : 'no'; // иницилизируем правильный ответ

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === TrueAnswer) { // если дан правильный ответ
    console.log('Correct!');
    CounterOfCorrectAnswers += 1;
  } else { // если дан невенрый ответ
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${TrueAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  if (CounterOfCorrectAnswers === winningNumber) {
    console.log(`Congratulations, ${name}!`);
  }
} while (CounterOfCorrectAnswers !== winningNumber);
