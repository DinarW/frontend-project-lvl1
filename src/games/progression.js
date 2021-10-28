import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getSequenseOfProgression = (start, step, count) => {
  const progressionSequense = [];
  for (let i = 0; i <= count; i += 1) {
    progressionSequense.push(start + step * i);
  }

  return progressionSequense;
};

const createRound = () => {
  const startProg = getRandomNumber(0);
  const stepProg = getRandomNumber(1, 10);
  const countElements = getRandomNumber(5, 10);
  const positionQuestion = getRandomNumber(0, countElements - 1);

  const seq = getSequenseOfProgression(startProg, stepProg, countElements);
  const correctAnswer = String(seq[positionQuestion]);
  seq[positionQuestion] = '..';
  const question = seq.join(' ');

  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';

const brainProgression = () => playGame(task, createRound);

export default brainProgression;
