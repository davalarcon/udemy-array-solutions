var nums = [6, 7, 8, 9, 10];

function printReverse(arr) {
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse(nums);

var arr2 = [1, 1, 1, 2, 1, 1];

function isUniform(arr) {
    // var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
            return false;
        }
    }
    return true;
}



isUniform(arr2);