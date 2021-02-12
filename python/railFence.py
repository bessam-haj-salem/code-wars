def encode_rail_fence_cipher(string, n):
    arr = list(string)
    # print(arr)
    for i in range(n, len(arr), n):
        arr.insert(i, arr[i-1])
    arr1 = []
    arr2 = []
    print(arr)
    for i in range(0, len(arr), n):
        for j in range(i, n + i):
            arr1.append(arr[j])
        arr2.append(arr1)
        arr1 = []
    print(arr2)
    arrResult1 = []
    arrResult2 = []
    arrResult3 = []
    for i in range(0, len(arr2), n - 1):
        arrResult3.append(arr2[i][len(arr2[i]) - 1])

    print(arrResult3)


print(encode_rail_fence_cipher('WEAREDISCOVEREDFLEEATONCE', 3))
