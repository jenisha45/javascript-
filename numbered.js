let arr = [10, 25, 5, 40, 18, 9, 60, 2, 15, 30];

let largest = arr[0];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    } else if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);
