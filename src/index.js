import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  const initResult = [name, 3, 0];
  return initResult;
};

const initResponse = (question, trueAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === String(trueAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
  return false;
};

const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { startGame, initResponse, random };
