class Interview {
    /**
 Do not return anything, modify nums in-place instead.
 */
    rotate(nums: number[], k: number): void {
        // normal way O(n) space;

        // const defaultArr = [...nums];

        // for (let i = 0; i < defaultArr.length; i++) {
        //     let index = (i + k) % defaultArr.length;

        //     nums[index] = defaultArr[i];
        // }

        function reverseElementIndex(start, end) {
            while (start < end) {
                let tempt = nums[start];
                nums[start] = nums[end];
                nums[end] = tempt;
                start++;
                end--;
            }
        }

        nums.reverse();

        k = k % nums.length;

        reverseElementIndex(0, k - 1);
        reverseElementIndex(k, nums.length - 1);
    }

    mergeSortPractice() {
        function recursiveMergeSort() {

        }
    }
}
