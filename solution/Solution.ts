// Solution in TS
function canBeEqual(target: number[], arr: number[]): boolean {
    // Create a count map to store the frequency of each number from 0 to 1000
    let countMap: number[] = new Array(1001).fill(0);

    // Iterate over the target and arr arrays
    for(let i = 0; i < target.length; i++) {
        // Increment the count of each number in the target array
        countMap[target[i]]++;
        // Decrement the count of each number in the arr array
        countMap[arr[i]]--;
    }

    // Check if all counts are zero
    for(let i = 0; i < countMap.length; i++) {
        // If any count is not zero, return false
        if(countMap[i] !== 0) {
            return false;
        }
    }

    // If all counts are zero, return true
    return true;
}