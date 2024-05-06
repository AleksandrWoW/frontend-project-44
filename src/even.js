import readlineSync from 'readline-sync';


export default () => {
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const randomMath = Math.floor(Math.random() * 101);
    const even = randomMath % 2 === 0;
    const evenOrOdd = even ? 'yes' : 'no';
    
    for (let i = 0; i < 3; i++) {
        console.log(`Question: ${randomMath}`);
        const youAnswer = readlineSync.question('Your answer: ');


        if (youAnswer !== evenOrOdd) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log(`Let's try again, ${nameUser}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${nameUser}!`);
};