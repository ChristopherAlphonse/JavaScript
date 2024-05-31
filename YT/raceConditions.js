// race condition is when the data is out of sync, example :

let counter = 0;

function incrementCounter() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const temp = counter;
            counter = temp + 1;
            resolve();
        }, Math.random() * 1000);
    });
}

async function run() {
    await Promise.all([incrementCounter(), incrementCounter()]);
    console.log(counter);
}

run();
