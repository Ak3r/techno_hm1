let example = [1,0,-4];

const solveEquation = (arr) => {
    let [a,b,c] = arr;

    let equation = `${a} * x^2 + ${b} * x + ${c} = 0`;

    let discriminant = Math.pow(b,2) - (4 * a * c);

    switch(discriminant > 0) {
        case true: 
            console.log(
                `
                Equation: ${equation},
                Discriminant: ${discriminant},
                Roots: 
                    x1: ${(-b + Math.sqrt(discriminant)) / 2 * a}, 
                    x2: ${(-b - Math.sqrt(discriminant)) / 2 * a}
                `);
            break;
        case false: 
            console.log(
                `
                Equation: ${equation},
                Discriminant: ${discriminant},
                Roots: 
                    No Roots!
                `);
            break;
        default:
            console.log(
                `
                Equation: ${equation},
                Discriminant: ${discriminant},
                Roots: 
                    x: ${(-b + Math.sqrt(discriminant)) / 2 * a}
                `);
            break;
    }
}

solveEquation(example);