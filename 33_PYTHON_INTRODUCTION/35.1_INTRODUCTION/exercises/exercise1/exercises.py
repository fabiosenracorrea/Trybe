import math

def biggest(num1, num2):
  if num1 > num2:
    return num1

  return num2


def avg(listToTakeAvg):
  sum = 0

  for item in listToTakeAvg:
    sum += item

  avg = sum / len(listToTakeAvg)

  return avg


def printSquare(num):
  if (num > 1):
    for i in range(num):
      print('*' * num)


def biggestName(nameList):
  if (len(nameList) > 0):
    biggest = ''

    for name in nameList:
      if len(name) > len(biggest):
        biggest = name

    return biggest


def paintCalc(area):
  paintCoveragePerLitter = 3
  paintCanLitters = 18
  paintCanPrice = 80

  littersNeeded = area / 3
  cansNeeded = math.ceil(littersNeeded / paintCanLitters)
  priceToPay = 80 * cansNeeded

  return (cansNeeded, priceToPay)

def isTriangle(a, b, c):
  if a + b < c:
    return False

  if a == b and b == c:
    return 'Equilátero'

  if a == b or b == c or a == c:
    return 'Isósceles'

  return 'Escaleno'
