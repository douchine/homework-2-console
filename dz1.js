const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;
const now = new Date();
const command = argv._[0];

if (command === 'current') {
    if (argv.y) console.log(now.getFullYear());
    else if (argv.m) console.log(now.getMonth() + 1);
    else if (argv.d) console.log(now.getDate());
    else console.log(now.toISOString());
} else if (command === 'add') {
    const now = new Date();
    now.setDate(now.getDate() + (argv.d || 0));
    now.setMonth(now.getMonth() + (argv.month || 0));
    console.log(now.toISOString());
} else if (command === 'sub') {
    const now = new Date();
    now.setDate(now.getDate() - (argv.d || 0));
    now.setMonth(now.getMonth() - (argv.month || 0));
    console.log(now.toISOString());
}