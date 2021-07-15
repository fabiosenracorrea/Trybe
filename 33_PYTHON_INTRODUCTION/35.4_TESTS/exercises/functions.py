def fizBuzz(n):
  number_list = []

  for number in range(1, n + 1):
    value = ''

    if number % 3 == 0:
      value += 'Fizz'

    if number % 5 == 0:
      value += 'Buzz'

    if len(value) == 0:
      value = number

    number_list.append(value)

  return number_list


