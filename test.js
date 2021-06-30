const isPrimaryNumber = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
};

const fibonacci = num => {
    const phi = (1 + Math.sqrt(5))/2;
    const asymption = Math.pow(phi, num) / Math.sqrt(5);
    return Math.round(asymption);
};

const nextPrimeFibbonachi = number => {
    let line = 1;
    let fibNumber;

    while (true) {
        fibNumber = fibonacci(line);
        console.log('fib', fibNumber, number);
        if (fibNumber > number && isPrimaryNumber(fibNumber)) {
            break;
        } else {
            line = line + 1;
            console.warn('bumping to', fibNumber);
        }
    }
    console.warn('Next prime fib ', fibNumber);
}

nextPrimeFibbonachi(21);