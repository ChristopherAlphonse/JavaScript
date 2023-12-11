function balancedOrNot(expressions, maxReplacements) {
  const result = [];

  for (let i = 0; i < expressions.length; i++) {
    const expression = expressions[i];
    let replace = 0;
    let balance = true;

    for (let j = 0; j < expression.length; j++) {
      const value = expression[j];

      if (value === "<") {
        replace += 1;
      } else if (value === ">") {
        if (replace === 0) {
          balance = false;
          break;
        }
        replace -= 1;
      }
    }

    if (replace > maxReplacements[i] || !balance) {
      result.push(0);
    } else {
      result.push(1);
    }
  }

  return result;
}

let expressions = [">>", "<<>>", "<>>>"];
let maxReplacements = [0, 1, 2];

const result = balancedOrNot(expressions, maxReplacements);

console.log(result);

// Time 0(n * m) and Space 0(n)
