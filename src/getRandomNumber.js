const getRandomNumber = (min, max = 100) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default getRandomNumber;
