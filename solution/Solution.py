# Solution in PY
# Open the output file in write mode
from json import loads
from sys import stdin


with open("user.out", "w") as f:
    # Read input from stdin, parse each line as a JSON array, and zip them together
    for target, arr in zip(map(loads, stdin), map(loads, stdin)):
        # Create two frequency dictionaries to count the occurrences of each number
        f1 = {}
        f2 = {}

        # Count the occurrences of each number in the target array
        for num in target:
            if num not in f1:
                f1[num] = 0
            
            f1[num] += 1
        
        # Count the occurrences of each number in the arr array
        for num in arr:
            if num not in f2:
                f2[num] = 0
            
            f2[num] += 1
        
        # Check if the frequency dictionaries are equal
        # If they are equal, print "true" to the output file, otherwise print "false"
        print(["true", "false"][f1 != f2], file=f)

# Exit the program
exit()