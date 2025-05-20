// Find leaders
function Q1() {
    let arr = [1, 17, 4, 5, 3, 1];
    let arr2 = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            arr2.push(arr[i]);
        }
    };

    console.log(arr2);
};

function Q2() {
    let a = [1, 5, 94, 56, 855];
    let n = a.length - 1;
    divide(a, 0, n);
    console.log(a);

    function divide(a, low, high) {
        if (low >= high) {
            return [a[low]]
        }

        let mid = Math.floor((low + high) / 2)

        divide(a, low, mid);
        divide(a, mid + 1, high);

        conquer(a, low, mid, high)
    }

    function conquer(a, low, mid, high) {
        let merge = []
        let x = 0

        let indx1 = low;
        let indx2 = mid + 1;

        while (indx1 <= mid && indx2 < high) {
            if (a[indx1] < a[indx2]) {
                merge[x++] = a[indx1++]
            }
            else {
                merge[x++] = a[indx2++]
            }
        }

        while (indx1 <= mid) {
            merge[x++] = a[indx1++]
        }
        while (indx2 <= high) {
            merge[x++] = a[indx2++]
        }

        for (let i = 0, j = low; i < merge.length - 1; i++, j++) {
            a[j] = merge[i]
        }
    }

}