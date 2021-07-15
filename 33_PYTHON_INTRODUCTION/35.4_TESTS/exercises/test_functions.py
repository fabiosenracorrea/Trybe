from functions import fizBuzz

def test_fizBuzz_matches_divided_by_3_numbers():
  expected = [1, 2, 'Fizz']

  assert expected == fizBuzz(3)


def test_fizBuzz_matches_divided_by_5_numbers():
  expected = [1, 2, 'Fizz', 4, 'Buzz']

  assert expected == fizBuzz(5)


def test_fizBuzz_matches_divided_by_15_numbers():
  expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

  assert expected == fizBuzz(15)

