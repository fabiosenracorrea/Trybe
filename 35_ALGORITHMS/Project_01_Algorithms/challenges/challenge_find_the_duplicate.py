def verifyBadNum(num):
    try:
        int(num)
    except ValueError:
        return False

    if (num) <= 0:
        return False


def find_duplicate(nums):
    if len(nums) < 2:
        return False

    counter = {}

    for num in nums:
        if (not(verifyBadNum(num))):
            False

        if num in counter:
            return num

        counter[num] = 1

    return False
