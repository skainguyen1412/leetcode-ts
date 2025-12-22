function minDeletionSize(strs: string[]): number {
    // O(n^2)
    function o2(strs: string[]): number {
        const strsColumn = [];

        strs.map((str) => {
            for (let i = 0; i < str.length; i++) {
                if (strsColumn[i]) {
                    strsColumn[i] = strsColumn[i] + str[i];
                } else {
                    strsColumn[i] = str[i];
                }
            }
        });

        let countDelete = 0;

        strsColumn.forEach((str, index) => {
            for (let i = 0; i < str.length - 1; i++) {
                if (str[i] > str[i + 1]) {
                    countDelete++;
                    break;
                }
            }
        });

        return countDelete;
    }

    // On solution

    function on(strs: string[]): number {
        // Need to find way to solve with on
        let countDelete = 0;

        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 0; j < strs.length - 1; j++) {
                if (strs[j][i] > strs[j + 1][i]) {
                    countDelete++;
                    break;
                }
            }
        }

        return countDelete;
    }

    return on(strs);
}
