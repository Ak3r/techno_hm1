let example = [1,0,-4];

const solveEquation = (arr) => {
    let [a,b,c] = arr;

    let equation = `${a} * x^2 + ${b} * x + ${c} = 0`;

    let discriminant = Math.pow(b,2) - (4 * a * c);

    if(discriminant < 0) {
        return console.log(
            `
            Equation: ${equation},
            Discriminant: ${discriminant},
            Roots: 
                No Roots!
            `);
    } else if(discriminant === 0) {
        return console.log(
            `
            Equation: ${equation},
            Discriminant: ${discriminant},
            Roots: 
                x: ${(-b + Math.sqrt(discriminant)) / 2 * a}
            `);
    } else {
        return console.log(
            `
            Equation: ${equation},
            Discriminant: ${discriminant},
            Roots: 
                x1: ${(-b + Math.sqrt(discriminant)) / 2 * a}, 
                x2: ${(-b - Math.sqrt(discriminant)) / 2 * a}
            `);
    }
}

solveEquation(example);