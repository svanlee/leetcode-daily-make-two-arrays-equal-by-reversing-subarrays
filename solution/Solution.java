// Solution in JAVA
class Solution {
    public boolean canBeEqual(int[] target, int[] arr) {
        // Get the lengths of the target and arr arrays
        int n = target.length, m = arr.length;

        // If the lengths are not equal, it's impossible to make them equal
        if (n != m) return false;

        // Create a frequency map to count the occurrences of each number
        int[] map = new int[1001];

        // Count the occurrences of each number in the target and arr arrays
        for (int i = 0; i < n; i++) {
            // Increment the count for the current number in the target array
            map[target[i]]++;
            // Decrement the count for the current number in the arr array
            map[arr[i]]--;
        }

        // Check if the counts for all numbers are zero
        for (int i = 0; i < n; i++) {
            // If the count for the current number in the target or arr array is not zero, return false
            if (map[target[i]] != 0 || map[arr[i]] != 0) {
                return false;
            }
        }

        // If all counts are zero, it's possible to make the arrays equal
        return true;
    }
}