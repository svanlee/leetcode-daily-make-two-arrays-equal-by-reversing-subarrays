def can_be_equal(target, arr)
    # Create a count map to store the frequency of each number
    count_map = Hash.new(0)

    # Iterate over the target and arr arrays
    target.zip(arr).each do |t, a|
        # Increment the count of each number in the target array
        count_map[t] += 1
        # Decrement the count of each number in the arr array
        count_map[a] -= 1
    end

    # Check if all counts are zero
    count_map.all? { |_, v| v == 0 }
end