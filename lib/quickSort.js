/**
 * 
 * @param {Array<number>} arr 
 * @param {number} lo 
 * @param {number} hi 
 * @returns {number} the pivot index
 */
function partition(arr, lo, hi) {
    const pivot = arr[hi];

    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

/**
 * 
 * @param {Array<number>} arr the array to sort
 * @param {number} lo the index to sort from
 * @param {number} hi the index to sort to
 */
function qs(arr, lo, hi) {
    if (lo >= hi) return;

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

/**
 * Sort an array with the QuickSort algorithm
 * @param {Array<number>} arr input array
 * @returns {Array<number>} the sorted array
 */
module.exports = function quickSort(arr) {
    qs(arr, 0, arr.length - 1);
    return arr;
};