import { startGame, randomNumber } from '../index.js';

const sequenseOfProgression = (start, step, count) => {
  const progressionSequense = [];

  for (let i = start; i <= start + step * count; i += step) {
    progressionSequense.push(i);
  }

  return progressionSequense;
};

const createQuestAnswer = () => {
  const startProg = randomNumber(0);
  const stepProg = randomNumber(0, 10);
  const countElements = randomNumber(5, 10);
  const positionQuestion = randomNumber(0, countElements - 1);

  const seq = sequenseOfProgression(startProg, stepProg, countElements);
  const trueAnswer = String(seq[positionQuestion]);
  seq[positionQuestion] = '..';
  const question = seq.join(' ');

  return [question, trueAnswer];
};

const task = 'What number is missing in the progression?';

const brainProgression = () => startGame(task, createQuestAnswer);

export default brainProgression;
