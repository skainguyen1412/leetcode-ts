export function swap(arr, i, j) {
    let tempt = arr[i];
    arr[i] = arr[j];
    arr[j] = tempt;
}
