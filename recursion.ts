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
}

const recursion = new RecursionPractice();
recursion.printNto1(4);
