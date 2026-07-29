const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secret = Math.floor(Math.random() * 101);
console.log ('Загадано число от 0 до 100');
function gameStart () {
rl.question('Введите число: ',(answer) => {
    const userNumber = Number(answer);
    if (secret === userNumber) {
        console.log ('Вы угадали число');
        rl.close();
    } else if (secret < userNumber) {
        console.log ('Загаданное число меньше');
        gameStart();
    } else if (secret > userNumber) {
        console.log ('Загаданное число больше');
        gameStart();
    }
});
}
gameStart();