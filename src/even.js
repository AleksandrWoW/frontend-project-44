import readlineSync from 'readline-sync';

    export default () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i++){
        if (number % 2 === 0 ) {
        console.log(`Question: ${number} `);
        readlineSync.question(`Your answer:  `);
        } 
        if (number % 2 !== 0 || '') {
        console.log ("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!"); 
        return ;
        }
        console.log('Correct!');

    };
    console.log(`Congratulations, ${name}!`)
};
