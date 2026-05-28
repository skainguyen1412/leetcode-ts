class ArrSolution {
    twoSum(arr: number[], goal: number) {
        // Two Sum : Check if a pair with given sum exists in Array
        // Problem Statement: Given an array of integers arr[] and an integer target.
        // 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
        // 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.
        // Try to solve this use hashmap
        // Basically we got the arr and find the two number in arr that can sum to the goal number
        const map = new Map();

        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                const value = map.get(arr[i]);
                map.set(arr[i], value + 1);
            } else {
                map.set(arr[i], 1);
            }

            const needed = goal - arr[i];

            if (map.has(needed)) {
                console.log(needed, arr[i]);
            }
        }
    }
}

const testArr = new ArrSolution();
testArr.twoSum([2, 6, 5, 8, 11, 2], 14);
