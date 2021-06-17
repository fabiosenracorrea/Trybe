def is_palindrome_recursive(word, low, high):
    if word == '':
        return False

    if word[low] != word[high]:
        return False

    if len(word) == 1:
        return True

    CUT_FIRST = 1
    sliced = word[CUT_FIRST:high]

    return is_palindrome_recursive(sliced, low, len(sliced) - 1)
