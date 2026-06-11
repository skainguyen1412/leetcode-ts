// class DSA {
//     queue() {
//         // FIFO
//     }

//     stack() {
//         // LIFO
//     }
// }

class NumArray {
    nums: number[];
    postfix: number[];
    prefix: number[];

    constructor(nums: number[]) {
        this.nums = nums;

        let i = 0;
        let j = 0;
        let prefixArr = [];
        let postfixArr = [];
        while (i < nums.length && j >= 0) {
            let prefixVal = nums[i] + (prefixArr[i - 1] ?? 0);
            let postfixVal =
                nums[j] + (postfixArr[nums.length - 1 - i - 1] ?? 0);

            prefixArr.push(prefixVal);
            postfixArr.push(postfixVal);
            i++;
            j--;
        }

        postfixArr.reverse();

        console.log(prefixArr);
        console.log(postfixArr);
    }

    sumRange(left: number, right: number): number {
        return;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
