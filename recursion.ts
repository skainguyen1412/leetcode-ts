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

    reverseArray(arr: number[]) {
        // Input: N = 5, arr[] = {5,4,3,2,1}
        // Output: {1,2,3,4,5}
        // Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.
        // O(n/2)
        // This is ok approach cause it have O(n/2) but it introduce unneeded complexity
        // with two if else
        // This approach from middle to outside
        // let middle;
        // if (arr.length % 2 !== 0) {
        //     middle = Math.round(arr.length / 2) - 1;
        //     let i = 1;
        //     while (middle + i < arr.length) {
        //         let tempt = arr[middle + i];
        //         arr[middle + i] = arr[middle - i];
        //         arr[middle - i] = tempt;
        //         i++;
        //     }
        // } else {
        //     middle = arr.length / 2;
        //     let i = 0;
        //     while (middle - i - 1 >= 0) {
        //         let tempt = arr[middle + i];
        //         arr[middle + i] = arr[middle - i - 1];
        //         arr[middle - i - 1] = tempt;
        //         i++;
        //     }
        // }
        // console.log(arr);
        // ----------------
        // Approach from outside two middle is better cause we don"t need to handle if else case

        let middle;

        if (arr.length % 2 == 0) {
            middle = arr.length / 2;
        } else {
            middle = Math.round(arr.length / 2) - 1;
        }

        let low = 0;
        let high = arr.length - 1;
        let i = 0;

        while (low + i < middle) {
            let tempt = arr[low + i];
            arr[low + i] = arr[high - i];
            arr[high - i] = tempt;
            i++;
        }

        console.log(arr);
    }

    fibonacciNumber(n, current = n) {
        // Input: n = 4
        // Output: 3
        // Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

        if (current == 1) {
            return 1;
        }

        if (current == 0) {
            return 0;
        }

        let total =
            this.fibonacciNumber(n, current - 1) +
            this.fibonacciNumber(n, current - 2);

        return total;
    }
}

const recursion = new RecursionPractice();
console.log(recursion.fibonacciNumber(4));
