import { swap } from "./helper";

class ProblemMedium {
    findKthLargest(
        nums: number[],
        k: number,
        low = 0,
        high = nums.length - 1,
    ): number {
        // Leetcode: https://leetcode.com/problems/kth-largest-element-in-an-array/?utm_source=chatgpt.com
        // This as first thought i read the description it said can you solve it without sort i think that they don't want
        // us to use sort algorithm so i think about sort by find each largest and push it but it got On^2
        // But after check they mean that we can use it but aim at not sort the whole array
        // So i think about that we take quick sort partition part and find it
        // It quite quickly if we just take the larger part on the right

        if (low >= high) {
            return nums[low];
        }

        const pivotIndex = partition(nums, low, high);

        const currentK = high - pivotIndex + 1;

        if (currentK === k) {
            return nums[pivotIndex];
        }

        if (currentK < k) {
            return this.findKthLargest(nums, k - currentK, low, pivotIndex - 1);
        }

        return this.findKthLargest(nums, k, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (i <= high && arr[i] <= pivot) {
            i++;
        }

        while (j >= low && arr[j] > pivot) {
            j--;
        }

        if (i < j) {
            swap(arr, i, j);
        }
    }

    swap(arr, low, j);
    console.log(arr);

    return j;
}

const testProblem = new ProblemMedium();

const arr = [7, 6, 5, 4, 3, 2, 1];

const largestK = testProblem.findKthLargest(arr, 2);
console.log(largestK);
