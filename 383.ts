// 383. Ransom Note

function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomeNoteArr = ransomNote.split("");
    const magazineArr = magazine.split("");

    for (let i = 0; i < ransomeNoteArr.length; i++) {
        for (let j = 0; j < magazineArr.length; j++) {
            if (ransomeNoteArr[i] == magazineArr[j]) {
                magazineArr[j] = "";
                break;
            }
            // If there is no match for one word we return false immediately
            if (j == magazineArr.length - 1) {
                return false;
            }
        }
    }

    return true;
}

// Hashmap implement

function canConstructHashMap(ransomNote: string, magazine: string): boolean {
    const magazineMap: Map<string, number> = new Map();

    // Ok let start implement hashmap

    for (let i = 0; i < magazine.length; i++) {
        let value = magazineMap.get(magazine[i]);

        if (value) {
            magazineMap.set(magazine[i], value + 1);
        } else {
            magazineMap.set(magazine[i], 1);
        }
    }

    for (let j = 0; j < ransomNote.length; j++) {
        let value = magazineMap.get(ransomNote[j]);
        if (value > 0) {
            magazineMap.set(ransomNote[j], value - 1);
        } else {
            return false;
        }
    }

    return true;
}
