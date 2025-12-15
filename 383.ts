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
