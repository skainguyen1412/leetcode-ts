class SlidingWindow {
    lengthLongestSubarray(arr: number[]): number {
        if (arr.length == 0) {
            return 0;
        }

        let maxLength = 1;
        let currentLength = 1;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                currentLength = currentLength + 1;

                if (i == arr.length - 2) {
                    maxLength = Math.max(currentLength, maxLength);
                    currentLength = 1;
                }
            } else {
                maxLength = Math.max(currentLength, maxLength);
                currentLength = 1;
            }
        }

        return maxLength;
    }

    fixedKSlidingWindow(arr: number[], k: number): boolean {
        // Get the input array
        // Return true if there are two elements within the k window that equals
        // 1 2 3 2 3 3
        // Return true at 2 3 2 with k = 3
        // Return true at 33 with k = 2

        for (let left = 0; left < arr.length; left++) {
            let right = left + 1;

            while (right < arr.length && right <= left + k - 1) {
                if (arr[left] == arr[right]) {
                    return true;
                }

                right++;
            }
        }

        return false;
    }

    variableSlidingWindow(arr: number[], target: number): number {
        // Find shortest subarray where sum is or equal to target: O(n)
        // Each number is positive >= 0

        let minLength = arr.length + 1;
        let left = 0;
        let right = 0;
        let sum = arr[right];

        for (; left < arr.length; left++) {
            if (right >= arr.length) {
                continue;
            }

            while (right < arr.length && sum < target) {
                right++;
                sum += arr[right];
            }

            if (sum >= target) {
                sum -= arr[left];
                minLength = Math.min(minLength, right - left + 1);
            }
        }

        return minLength == arr.length + 1 ? 0 : minLength;
    }
}

const slidingMain = new SlidingWindow();
console.log(slidingMain.variableSlidingWindow([10, 1, 10], 10));
