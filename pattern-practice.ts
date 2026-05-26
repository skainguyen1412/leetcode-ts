class Solution {
    // 25-05
    pattern22(n) {
        // 5 5 5 5 5 5 5 5 5
        // 5 4 4 4 4 4 4 4 5
        // 5 4 3 3 3 3 3 4 5
        // 5 4 3 2 2 2 3 4 5
        // 5 4 3 2 1 2 3 4 5
        // 5 4 3 2 2 2 3 4 5
        // 5 4 3 3 3 3 3 4 5
        // 5 4 4 4 4 4 4 4 5
        // 5 5 5 5 5 5 5 5 5

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

    // 26-05
    pattern21(n) {
        // *****
        // *   *
        // *   *
        // *   *
        // *****
        // Need to make basically outer bounds star

        // The size is quite like the upper

        const size = n * 2 - 1;

        for (let i = 0; i < size; i++) {
            let row = "";

            for (let j = 0; j < size; j++) {
                // Check need to check if it belongs to outside
                // I think we check this by compare the min distance again of it

                // Check if it belongs to bound
                // I think we can check it quite easy
                // Just check if the i j one of them either 0 or equal size - 1

                const isBound =
                    i == 0 || i == size - 1 || j == 0 || j == size - 1;

                if (isBound) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            console.log(row);
        }
    }

    // 26-05
    pattern19(n) {
        const size = 2 * n;

        for (let i = 0; i < size; i++) {
            let row = "";
            const middle1 = size / 2 - 1;
            const middle2 = size / 2 + 1 - 1;
            const middleColumn = size / 2;
            for (let j = 0; j < size; j++) {
                // With this exercise we aim at middle points
                // and then expand as column increase
                // until we hit the bounds then we reverse
                const isBound =
                    i == 0 || i == size - 1 || j == 0 || j == size - 1;

                const isBlank = () => {
                    if (isBound) {
                        return false;
                    }

                    if (i >= middleColumn) {
                        // Downer
                        const start = 0;
                        const end = size - 1;
                        if (
                            j > start + i - middleColumn &&
                            j < end - i + middleColumn
                        ) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        // Upper
                        if (j >= middle1 - i + 1 && j <= middle2 + i - 1) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                };

                if (isBlank()) {
                    row += " ";
                } else {
                    row += "*";
                }
            }

            console.log(row);
        }
    }
}

const main = new Solution();

main.pattern19(4);
