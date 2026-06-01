class RecursionPractice {
    stackOverflow(n) {
        // Replicate stackoverflow with recursive with no stop condition
        // basically the function got store in call stack too much and never got called
        // haha got stackoverflow maximum call stack size exceeded at 56623

        console.log(n);
        this.stackOverflow(n + 1);
    }

    print1toNFirst(goal, count = 1) {
        // first way forward recursion

        if (count > goal) {
            return;
        }

        console.log(count);

        this.print1toNFirst(goal, count + 1);
    }

    print1toNSecond(goal, current = goal) {
        // second way do backtrack

        if (current < 1) {
            return;
        }

        this.print1toNSecond(goal, current - 1);
        console.log(current);
    }

    printNto1(goal, current = 1) {
        // use backtrack
        // solve without using -1

        if (current > goal) {
            return;
        }

        this.printNto1(goal, current + 1);
        console.log(current);
    }

    sumFirstNForward(n, current = n) {
        // Input: N=5
        // Output: 15
        // Explanation: 1+2+3+4+5=15
        // Backtrack because the 1 execute first
        // Do this we dont have to make a sum parameter

        if (current == 0) {
            return 0;
        }

        let sum = current + this.sumFirstNForward(n, current - 1);
        return sum;
    }

    factorialNumber(x, count = 1) {
        // Input:
        //  X = 5
        // Output:
        //  120
        // Explanation:
        //  5! = 5*4*3*2*1
        // -----------------
        // Iterative approach
        // let sum = 1;
        // for (let i = 1; i <= x; i++) {
        //     sum = sum * i;
        // }
        // return sum;
        // -----------------
        // Recursive (backtracking) approach
        // Visualize it in your mind understand deeply

        if (count > x) {
            return 1;
        }

        const sum = count * this.factorialNumber(x, count + 1);

        return sum;
    }
}

const recursion = new RecursionPractice();
console.log(recursion.factorialNumber(5));
