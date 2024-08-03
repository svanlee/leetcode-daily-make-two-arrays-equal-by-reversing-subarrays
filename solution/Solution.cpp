// Solution in CPP
class Solution
{
public:
    bool canBeEqual(vector<int> &target, vector<int> &arr)
    {
        // Sort both arrays to prepare for comparison
        sort(arr.begin(), arr.end());
        sort(target.begin(), target.end());

        // Compare the sorted arrays element by element
        for (int i = 0; i < arr.size(); i++)
        {
            // If a mismatch is found, return false immediately
            if (arr[i] != target[i])
                return false;
        }

        // If no mismatches are found after comparing all elements, return true
        return true;
    }
};