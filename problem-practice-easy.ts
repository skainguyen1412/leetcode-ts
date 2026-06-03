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
}

const problemEasy = new ProblemEasyPractice();

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 4, 5];

problemEasy.unionTwoSortedArr(arr1, arr2);
