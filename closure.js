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
    let count = n;

    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count,
        setCount: (newCount) => {
            count = newCount;
        },
    };
}

const counter = CreateCounter(0);
counter.setCount(255);

console.log(counter.getCount());
