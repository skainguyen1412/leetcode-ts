// 1480. Running Sum of 1d Array

function runningSum(nums: number[]): number[] {
    // ok how we gonna do. we gonna for loop both time
    return nums.reduce((previousValue, currentValue, index) => {
        if (index == 0) {
            return [currentValue];
        }

        previousValue[index] = currentValue + previousValue[index - 1];
        return previousValue;
    }, []);
}

// Internet solution

function runningSumInternet(nums: number[]): number[] {
    // ok how we gonna do. we gonna for loop both time
    return nums.reduce((accumulator, currentValue, index) => {
        accumulator[index] =
            currentValue + (index == 0 ? 0 : accumulator[index - 1]);

        return accumulator;
    }, []);
}

let nums = [1, 2, 3, 4];
console.log(runningSum(nums));
console.log(runningSumInternet(nums));
