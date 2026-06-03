class SortSolution {
    bubbleSort(arr: number[]) {
        // bubble sort basically swap between position

        // Brute force way
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] < arr[j + 1]) {
                    let tempt = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = tempt;
                }
            }
        }

        console.log(arr);
    }

    insertionSort(arr: number[]) {
        // 28-08
        // pseudocode
        // for i: 1 to length(A) - 1
        //     j = i
        //     while j > 0 and A[j-1] > A[j]
        //         swap A[j] and A[j-1]
        //         j = j - 1

        // Ok i get it now
        // Basically quite simple with each index increase we sort the part from beginning to that index

        for (let i = 1; i < arr.length; i++) {
            let j = i;

            while (j > 0 && arr[j - 1] > arr[j]) {
                let tempt = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tempt;

                j--;
            }
        }

        console.log(arr);
    }

    mergeSort(arr: number[], low = 0, high = arr.length - 1) {
        // Merge sort will split the arr into multiple sub array, until it got only
        // one element left, then we merge them one by one and sort them

        if (low >= high) {
            return;
        }

        function merge(low, middle, high) {
            let result = [];

            let i = low;
            let j = middle + 1;

            while (i <= middle && j <= high) {
                if (arr[i] <= arr[j]) {
                    result.push(arr[i]);
                    i++;
                } else {
                    result.push(arr[j]);
                    j++;
                }
            }

            while (i <= middle) {
                result.push(arr[i]);
                i++;
            }

            while (j <= high) {
                result.push(arr[j]);
                j++;
            }

            for (let i = 0, j = low; i < result.length; i++, j++) {
                arr[j] = result[i];
            }
        }

        let middle = Math.floor((low + high) / 2);

        this.mergeSort(arr, low, middle);
        this.mergeSort(arr, middle + 1, high);

        merge(low, middle, high);
    }

    mergeSortPractice() {
        //https://leetcode.com/problems/merge-sorted-array/?utm_source=chatgpt.com
        /**
 Do not return anything, modify nums1 in-place instead.
 */
        function merge(
            nums1: number[],
            m: number,
            nums2: number[],
            n: number,
        ): void {
            let low1 = 0;
            let high1 = m - 1;
            let low2 = 0;
            let high2 = n - 1;
            let result = [];

            while (low1 <= high1 && low2 <= high2) {
                if (nums1[low1] <= nums2[low2]) {
                    result.push(nums1[low1]);
                    low1++;
                } else {
                    result.push(nums2[low2]);
                    low2++;
                }
            }

            while (low1 <= high1) {
                result.push(nums1[low1]);
                low1++;
            }

            while (low2 <= high2) {
                result.push(nums2[low2]);
                low2++;
            }

            if (nums1.length >= nums2.length) {
                for (let i = 0; i < nums1.length; i++) {
                    nums1[i] = result[i];
                }
            } else {
                for (let i = 0; i < nums2.length; i++) {
                    nums2[i] = result[i];
                }
            }
        }
    }

    recursiveBubbleSort(arr: number[], current = 0, times = 0) {
        // First let see what is bubble sort
        // Basically swap until it get sort
        // Basically On^2

        // Cach tu nghi ra
        if (times >= arr.length - 1) {
            return;
        }

        if (current >= arr.length - 1 - times) {
            this.recursiveBubbleSort(arr, 0, times + 1);
            return;
        }

        if (arr[current] > arr[current + 1]) {
            const temp = arr[current];
            arr[current] = arr[current + 1];
            arr[current + 1] = temp;
        }

        this.recursiveBubbleSort(arr, current + 1, times);

        // Cach tren mang

        function bubbleSort(arr, n) {
            // Base case
            if (n === 1) return;

            let didSwap = false;

            // Perform one pass
            for (let j = 0; j < n - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap using destructuring
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    didSwap = true;
                }
            }

            // If no swaps, array is already sorted
            if (!didSwap) return;

            // Recursive call for smaller size
            bubbleSort(arr, n - 1);
        }
    }

    quickSort(arr: number[], low = 0, high = arr.length - 1) {
        if (low >= high) {
            return;
        }

        const pivotIndex = pivotSort(arr, low, high);
        this.quickSort(arr, low, pivotIndex - 1);
        this.quickSort(arr, pivotIndex + 1, high);
    }
}

function pivotSort(arr, low, high): number {
    //TODO: This function will pick a pivot and sort and then return the index of the pivot at correct place

    const pivot = arr[low];

    let i = low + 1;

    let j = high;

    while (i <= j) {
        while (arr[i] <= pivot && i <= high) {
            i++;
        }

        while (arr[j] > pivot && j >= low) {
            j--;
        }

        if (i < j) {
            swap(arr, i, j);
        }
    }

    swap(arr, low, j);
    console.log(arr, low, high);
    return j;
}

function swap(arr, i, j) {
    let tempt = arr[i];
    arr[i] = arr[j];
    arr[j] = tempt;
}

const testSort = new SortSolution();
const arr = [4, 6, 4, 5, 7, 4, 1, 3];
testSort.quickSort(arr);

console.log(arr);
