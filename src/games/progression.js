import { startGame, random } from '../index.js';

const sequense = (start, step, count, position) => {
  const progSequense = [];
  let nowPosition = 1;
  let answer;

  for (let i = start; i <= start + step * count; i += step) {
    if (nowPosition !== position) {
      progSequense.push(i);
      nowPosition += 1;
    } else {
      answer = i;
      progSequense.push('..');
      nowPosition += 1;
    }
  }

  return [progSequense, answer];
};

const createQuestAnswer = () => {
  const fromNumber = 0;
  const startProg = random(fromNumber);
  const stepProg = random(fromNumber, 10);
  const countElements = random(5, 10);
  const positionQuestion = random(1, countElements);

  const [seq, answ] = sequense(startProg, stepProg, countElements, positionQuestion);
  const trueAnswer = answ;
  const question = seq.join(' ');

  return [question, trueAnswer];
};

const task = 'What number is missing in the progression?';

const brainProgression = () => startGame(task, createQuestAnswer);

export default brainProgression;
