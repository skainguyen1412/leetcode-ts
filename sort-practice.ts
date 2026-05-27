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
}

const testSort = new SortSolution();
testSort.bubbleSort([3, 1, 5, 4]);
