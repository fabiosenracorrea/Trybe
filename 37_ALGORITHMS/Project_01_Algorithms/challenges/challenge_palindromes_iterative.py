def is_palindrome_iterative(word):
    if not(word):
        return False

    word_length = len(word)

    max_index = word_length - 1
    half_index = word_length // 2

    for index in range(half_index):
        if (word[index] != word[max_index - index]):
            return False

    return True
