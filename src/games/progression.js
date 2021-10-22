import { startGame, getRandomNumber } from '../index.js';

const sequenseOfProgression = (start, step, count) => {
  const progressionSequense = [];
  let startProgression = start;
  for (let i = 0; i <= count; i += 1) {
    progressionSequense.push(startProgression);
    startProgression += step;
  }

  return progressionSequense;
};

const createRound = () => {
  const startProg = getRandomNumber(0);
  const stepProg = getRandomNumber(1, 10);
  const countElements = getRandomNumber(5, 10);
  const positionQuestion = getRandomNumber(0, countElements - 1);

  const seq = sequenseOfProgression(startProg, stepProg, countElements);
  const correctAnswer = String(seq[positionQuestion]);
  seq[positionQuestion] = '..';
  const question = seq.join(' ');

  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';

const brainProgression = () => startGame(task, createRound);

export default brainProgression;
