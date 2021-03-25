function findMinAndRemoveSorted(array) {
    let min = array[0],
        minIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        };
    };
    array.splice(minIndex, 1);
    return min;
};

function merge(array1, array2) {
    const sortedArray = []
    while (array1.length !== 0 && array2.length !== 0) {
        if (array1[0] < array2[0]) {
            sortedArray.push(array1.shift())
        } else {
            sortedArray.push(array2.shift())
        };
    };
    return sortedArray.concat(array1).concat(array2);
};

function mergeSort(array) {

    if (array.length > 1) {
        const midPoint = Math.round(array.length / 2);
        const array1 = array.slice(0, midPoint);
        const array2 = array.slice(midPoint);

        return merge(mergeSort(array1), mergeSort(array2));

    } else {
        return array;
    };
};