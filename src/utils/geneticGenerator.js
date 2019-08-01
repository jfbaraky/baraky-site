const defaultGoal = `HELLO, I'M`;

const calcFitness = (item, goal) => {
    const code = goal.map(letter => letter.charCodeAt(0));
    let totalFitness = 0;
    for (let index = 0; index < goal.length; index += 1) {
        totalFitness += Math.abs(item[index].charCodeAt(0) - code[index]);
    }
    return totalFitness;
};

const randomLetter = () => String.fromCharCode(Math.floor(Math.random() * 127) + 31);
const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

const mutate = str => {
    return str.map(letter => {
        const code = letter.charCodeAt(0);

    })
};

const generateGeneration = (pool, goal, onNextGeneration) => {
    const fitness = pool.map(item => calcFitness(item, goal));
    if (fitness.any(fit => fit === 0)) {
        // Result found
        const perfectIndex = fitness.indexOf(0);
        onNextGeneration(pool[perfectIndex]);
        return null;
    }
    const generation = pool.map((item, index) => ({item: pool[index], fitness: fitness[index]}));
    const averageFitness = average(fitness);

    let bestOfGeneration = generation.filter(item => item.fitness <= averageFitness);
    bestOfGeneration = pool.map((item, index) => bestOfGeneration[index%bestOfGeneration.length]);
};



const startPool = (size, onNextGeneration, goal = defaultGoal) => {
    const pool = [];
    for (let count = 0; count < size.length; count += 1) {
        for (let index = 0; index < goal.length; index += 1) {
            pool[count][index] = randomLetter();
        }
    }
    // Start first generation
    setTimeout(() => generateGeneration(pool, goal, onNextGeneration), 0);
};
