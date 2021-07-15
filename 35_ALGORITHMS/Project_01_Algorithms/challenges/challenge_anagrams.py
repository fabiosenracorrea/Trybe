def split_into_chars(word):
    return [char for char in word]


def is_anagram(first_string, second_string):
    if not (first_string) or not (second_string):
        return False

    if len(first_string) != len(second_string):
        return False

    first = split_into_chars(first_string)
    second = split_into_chars(second_string)

    first.sort()
    second.sort()

    return first == second
