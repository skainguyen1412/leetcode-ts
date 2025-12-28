// 412. Fizz Buzz

function fizzBuzz(n: number): string[] {
    let arr: string[] = [];

    for (let index = 0; index < n; index++) {
        const value = index + 1;

        if (value % 5 == 0 && value % 3 == 0) {
            arr[index] = "FizzBuzz";
        } else if (value % 5 == 0) {
            arr[index] = "Buzz";
        } else if (value % 3 == 0) {
            arr[index] = "Fizz";
        } else {
            arr[index] = value.toString();
        }
    }

    return arr;
}

let n = 5;

console.log(fizzBuzz(n));
