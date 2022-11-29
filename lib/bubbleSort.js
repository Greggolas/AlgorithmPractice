module.exports = function bubbleSort(array) { 
    const sortedArray = [...array];
    
    for (let i=0; i < array.length; i++) {
        for (let j=0; j < array.length - 1 - i; j++) {
            const nextIndex = j + 1;
            if (sortedArray[j] > sortedArray[nextIndex]) {
                const tmp = sortedArray[j];
                sortedArray[j] = sortedArray[nextIndex];
                sortedArray[nextIndex] = tmp;
            }
        }
    }

    return sortedArray;
}