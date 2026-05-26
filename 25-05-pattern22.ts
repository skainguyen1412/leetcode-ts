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

        for (let i = 0; i < size; i++) {
            let row = "";
            for (let j = 0; j < size; j++) {
                // Find the smallest distance at the position ij with the matrix size
                const smallestDistance = Math.min(
                    i,
                    j,
                    size - i - 1,
                    size - j - 1,
                );

                row += n - smallestDistance;
            }

            console.log(row);
        }
    }
}

const main = new Solution();

main.pattern22(3);
