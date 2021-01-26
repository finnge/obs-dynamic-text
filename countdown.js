const fs = require('fs');

const TIME = new Date('2021-01-26T21:52:00').getTime();
const FILE = './output/countdown.txt';

const outputMinutes = () => {
    const time = (TIME - Date.now()) / 1000;
    const ONE_MINUTE = 60;

    const minutes = Math.max(0, Math.trunc(time / ONE_MINUTE));
    const seconds = Math.max(0, Math.trunc(time % ONE_MINUTE));
    const preNull = (value) => (value < 10) ? '0' : '';
    
    return `${minutes}:${preNull(seconds)}${seconds}`
}

const text = () => {
    return `${outputMinutes()} min`;
}
setInterval(() => {
    const output = text();

    fs.writeFile(FILE, output, (err) => {
        if (err) throw err;
        console.log(`Write File ${output}`)
    });

}, 1000);
