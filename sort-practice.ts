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
}

const testSort = new SortSolution();
const arr = [3, 1, 5, 4];
testSort.mergeSort(arr);
console.log(arr);
