// Solution in JS
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let countMap = new Array(1001).fill(0);

    for(let i = 0; i < target.length; i++) {
        countMap[target[i]]++;
        countMap[arr[i]]--;
    }

    for(let i = 0; i < countMap.length; i++) {
        if(countMap[i] !== 0) {
            return false;
        }
    }

    return true;
};