class MathSolution {
    findGCD(n1: number, n2: number) {
        //         Example 1:
        // Input: N1 = 9, N2 = 12
        // Output: 3
        // Explanation:
        // Factors of 9: 1, 3, 9
        // Factors of 12: 1, 2, 3, 4, 6, 12
        // Common Factors: 1, 3
        // Greatest common factor: 3 (GCD)
        // Example 2:
        // Input: N1 = 20, N2 = 15
        // Output: 5
        // Explanation:
        // Factors of 20: 1, 2, 4, 5, 10, 20
        // Factors of 15: 1, 3, 5, 15
        // Common Factors: 1, 5
        // Greatest common factor: 5 (GCD)
        // Here is our steps i think
        // For find the factors of each number we loop through 1 to 10, and see if there is any number
        // it can divided
        // Than we find the common between them using includes
        // Than find the greatest number in that

        const factorsBoth = [];

        if (n2 % n1 == 0) {
            factorsBoth.push(n1);
        }

        if (n1 % n2 == 0) {
            factorsBoth.push(n2);
        }

        for (let i = 1; i <= Math.min(n1, n2); i++) {
            if (n1 % i == 0 && n2 % i == 0) {
                factorsBoth.push(i);
            }
        }

        let largest = factorsBoth[0];

        for (let i = 0; i < factorsBoth.length; i++) {
            if (factorsBoth[i] > largest) {
                largest = factorsBoth[i];
            }
        }

        console.log(largest);
    }
}

const calling = new MathSolution();

calling.findGCD(20, 15);
