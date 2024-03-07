function CreateSecret() {
    let secret = "";

    return {
        getSecret: () => secret,
        setSecret: (newSecret) => {
            secret = newSecret;
        },
    };
}

function CreateCounter(n) {
    let count = n ?? 0;

    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count,
        setCount: (newCount) => {
            count = newCount;
        },
    };
}

const counter = new CreateCounter(12);

for (let i = 0; i < 5; i++) {
    counter.increment();
}
console.log(counter.getCount());
