/**
 * Calculate how far the string is from the goal
 * @param {*} item
 * @param {*} goal
 * @returns
 */
const calcFitness = (item: string[], goal: string): number => {
  const code = goal.split('').map((letter) => letter.charCodeAt(0));
  let totalFitness = 0;
  for (let index = 0; index < goal.length; index += 1) {
    totalFitness += Math.abs(item[index].charCodeAt(0) - code[index]);
  }
  return totalFitness;
};

// Generate random letter on the valid range
const generateRandomLetter = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);

// Average of numbers of the array
const average = (arr: number[]): number => arr.reduce((p, c) => p + c, 0) / arr.length;

// Randomly define mutations for the string
const mutate = (str: string[]): string[] => {
  const mutationChance = 0.5; // 50%

  if (Math.random() > mutationChance) {
    // Mutation didn't happened
    return str;
  }

  // Mutation can be:
  // -1 decrease on alphabet
  // 1 increase on alphabet
  // 0 nothing happens
  const mutation = Math.floor(Math.random() * 3) - 1;
  const mutatedChar = Math.floor(Math.random() * str.length);

  str[mutatedChar] = String.fromCharCode(mutation + str[mutatedChar].charCodeAt(0));

  return str;
};

const reproduce = (father: string[], mother: string[]): string[] => {
  // Randomly mix both strings into a new one
  return father.map((fatherLetter, index) => {
    if (Math.random() < 0.5) {
      // Getting father letter
      return fatherLetter;
    }
    // Getting mother letter;
    return mother[index];
  });
};

const handleGeneration = (
  pool: string[][],
  goal: string,
  onNextGeneration: (value: string) => void,
  stepTime: number,
) => {
  // Calculating the fitness for each one of the candidates
  const fitness = pool.map((item) => calcFitness(item, goal));

  // Checking if the perfect score was already reached
  if (fitness.some((fit) => fit === 0)) {
    // Perfect score found
    const perfectIndex = fitness.indexOf(0);
    onNextGeneration(pool[perfectIndex].join(''));
    // Stopping generations
    return null;
  }

  // Killing all the candidates that are bellow the average
  const generation = pool.map((item, index) => ({
    item,
    fitness: fitness[index],
  }));
  const averageFitness = average(fitness);
  let bestOfGeneration = generation.filter((item) => item.fitness <= averageFitness);

  // Filling all the vacancies with the best candidates
  bestOfGeneration = pool.map((_, index) => bestOfGeneration[index % bestOfGeneration.length]);

  onNextGeneration(bestOfGeneration[0].item.join(''));

  // Generating next generation
  const newGeneration = bestOfGeneration.map((candidate) => {
    const mother = bestOfGeneration[Math.floor(Math.random() * bestOfGeneration.length)];
    const children = reproduce(candidate.item, mother.item);
    return mutate(children);
  });

  // Handling next generation
  setTimeout(() => handleGeneration(newGeneration, goal, onNextGeneration, stepTime), stepTime);
};

export const startPool = (
  poolSize: number,
  onNextGeneration: (value: string) => void,
  goal: string,
  stepTime = 1,
) => {
  // Generating a pool of random candidates
  const pool: string[][] = [];

  for (let count = 0; count < poolSize; count += 1) {
    pool[count] = goal.split('');
    for (let index = 0; index < goal.length; index += 1) {
      if (goal[index] === ' ' || goal[index] === '!') {
        pool[count][index] = goal[index];
        continue;
      } 
      pool[count][index] = generateRandomLetter();
    }
  }

  onNextGeneration(pool[0].join(''));
  // Start generations
  setTimeout(() => handleGeneration(pool, goal, onNextGeneration, stepTime), 2000);
};
