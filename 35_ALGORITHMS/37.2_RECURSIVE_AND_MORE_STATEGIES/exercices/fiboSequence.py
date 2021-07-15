INDEX_TO_COUNT_OFFSET = 1


# sneaky default param method
def get_Nth_fibo_number(Nth_number, fibo_sequency=[0, 1]):
    can_get_Nth_number = Nth_number == len(fibo_sequency)

    if can_get_Nth_number:
        return fibo_sequency[-1]

    second_to_last, last = fibo_sequency[-2:]

    new_number = second_to_last + last
    new_sequence = [*fibo_sequency, new_number]

    return get_Nth_fibo_number(Nth_number, new_sequence)


