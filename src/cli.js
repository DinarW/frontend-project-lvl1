import readlineSync from 'readline-sync';

const welcome = () => {
<<<<<<< HEAD
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
=======
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
>>>>>>> 72e7fcea4b36e4b56918cee171a218f9efff65d0
};

export default welcome;
