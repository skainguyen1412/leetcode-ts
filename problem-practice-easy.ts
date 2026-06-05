class ProblemEasyPractice {
    unionTwoSortedArr(arr1: number[], arr2: number[]) {
        // Input:n = 10,m = 7,arr1[] = {1,2,3,4,5,6,7,8,9,10} arr2[] = {2,3,4,4,5,11,12}
        // Output: {1,2,3,4,5,6,7,8,9,10,11,12}
        // Explanation: Common Elements in arr1 and arr2  are:  2,3,4,5
        // Distnict Elements in arr1 are : 1,6,7,8,9,10
        // Distnict Elemennts in arr2 are : 11,12
        // Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}

        let i = 0;
        let j = 0;
        const union: number[] = [];

        let lastAdded: number | undefined;

        function pushUnion(value: number) {
            if (value !== lastAdded) {
                union.push(value);
                lastAdded = value;
            }
        }

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] === arr2[j]) {
                pushUnion(arr1[i]);
                i++;
                j++;
            } else if (arr1[i] < arr2[j]) {
                pushUnion(arr1[i]);
                i++;
            } else {
                pushUnion(arr2[j]);
                j++;
            }
        }

        // Miss case khi 1 mang da xong roi ma 1 mang van con thi minh chua day het
        while (i < arr1.length) {
            pushUnion(arr1[i]);
            i++;
        }

        while (j < arr2.length) {
            pushUnion(arr2[j]);
            j++;
        }

        return union;
    }

    findMissingNumber(arr: number[]): number {
        // https://www.geeksforgeeks.org/dsa/find-the-missing-number/
        // TODO: Implement 3 ways, hashing, sum, XOR

        function hash() {
            const n = arr.length + 1;
            // Can be using Map as well i think it also better
            // Map<number,number> .set, .get, .has
            const hashTable: Record<number, boolean> = {};

            for (let i = 0; i < arr.length; i++) {
                hashTable[arr[i]] = true;
            }

            for (let i = 1; i <= n; i++) {
                if (!hashTable[i]) {
                    return i;
                }
            }

            return -1;
        }

        function sum() {
            let sumArr = 0;

            let sumN = () => {
                let result = 0;

                for (let i = 1; i <= arr.length + 1; i++) {
                    console.log(i);
                    result += i;
                }

                return result;
            };

            for (let i = 0; i < arr.length; i++) {
                sumArr += arr[i];
            }

            return sumN() - sumArr;
        }

        function xor() {
            const n = arr.length + 1;
            let xor1 = 0,
                xor2 = 0;

            // XOR all array elements
            for (let i = 0; i < n - 1; i++) {
                xor2 ^= arr[i];
            }

            // XOR all numbers from 1 to n
            for (let i = 1; i <= n; i++) {
                xor1 ^= i;
            }

            // Missing number is the XOR of xor1 and xor2
            return xor1 ^ xor2;
        }

        console.log(xor());

        return -1;
    }

    findingNumberAppearOne() {
        // Example 1:
        // Input Format: arr[] = {2,2,1}
        // Result: 1
        // Explanation: In this array, only the element 1 appear once and so it is the answer.
    }
}

const problemEasy = new ProblemEasyPractice();

const arr = [8, 2, 4, 5, 3, 7, 1];

const value = problemEasy.findMissingNumber(arr);
console.log(value);
