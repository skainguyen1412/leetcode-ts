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

    mergeSort(arr: number[]) {
        // Merge sort will split the arr into multiple sub array, until it got only
        // one element left, then we merge them one by one and sort them
        if (arr.length == 1) {
            //TODO: Implement merge function
        }

        const half = Math.floor(arr.length / 2);

        const firstHalf = arr.slice(0, half);
        const secondHalf = arr.slice(half);

        // this.mergeSort(firstHalf);
        // this.mergeSort(secondHalf);
    }
}

function merge(firstArr: number[], secondArr: number[]) {
    const resultArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] < secondArr[j]) {
                resultArr.push(firstArr[i]);
                continue;
            } else {
                resultArr.push(secondArr[i]);
                continue;
            }
        }
    }

    return resultArr;
}

console.log(merge([1, 3], [2, 4]));

const testSort = new SortSolution();
testSort.mergeSort([3, 1, 5, 4]);
