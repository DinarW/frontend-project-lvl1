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

const progression = () => {
  const task = 'What number is missing in the progression?';
  const winningNumber = 3;
  const trueAnswers = [];
  const questions = [];

  for (let i = 0; i < winningNumber; i += 1) {
    const startProg = random(1, 100);
    const stepProg = random(1, 10);
    const countElements = random(5, 10);
    const positionQuestion = random(1, countElements);
    const [seq, answ] = sequense(startProg, stepProg, countElements, positionQuestion);

    trueAnswers.push(answ);
    questions.push(seq);
  }

  startGame(task, questions, trueAnswers);
};

export default progression;
