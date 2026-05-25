// 5 5 5 5 5 5 5 5 5
// 5 4 4 4 4 4 4 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 2 1 2 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 4 4 4 4 4 4 5
// 5 5 5 5 5 5 5 5 5

class Solution {
    pattern22(n) {
        const size = n * 2 - 1;

        // How can we make like a grid

        // As print we must write from left to right and top to down

        for (let i = 1; i <= size; i++) {
            let row = "";
            for (let j = 1; j <= size; j++) {
                let value;
                // First row
                if (i == 1) {
                    value = n;
                }
                if (i >= 2) {
                    if (j == 1 || j == size) {
                        value = n;
                    } else {
                        value = n - i + 1;
                    }
                }
                // Second column n - 1
                row += value;

                // TODO:  Need to visualize and figure out the algorithm f(n)
            }
            console.log(row);
        }
    }
}

const main = new Solution();

main.pattern22(3);
