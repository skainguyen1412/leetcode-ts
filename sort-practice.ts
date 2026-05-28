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
}

const testSort = new SortSolution();
testSort.insertionSort([3, 1, 5, 4]);
