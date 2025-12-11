// 1342. Number of Steps to Reduce a Number to Zero

function numberOfSteps(num: number): number {
    // Ok quite simple we reduce num to 0, even we divided by 2 and odd we subtract 1, and return the step numbers
    let count = 0;

    while (num != 0) {
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        count++;
    }

    return count;
}

let num = 14;

console.log(numberOfSteps(num));
console.log(num);
