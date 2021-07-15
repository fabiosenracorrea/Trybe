def getLowest(someList):
    if (len(someList) > 0):
      lowest = someList[0]

    for num in someList:
      if num < lowest:
        lowest = num

    return lowest


def printTriangle(n):
  if (n > 1):
    for num in range(1, n + 1):
      print('*' * num)


def sumUpToNum(n):
  sum = 0

  for num in range(n + 1):
    sum += num

  return sum

gasStationInfo = {
  'A': {
    'price': 1.9,
    'baseValue': 20,
    'subValueDiscount': 0.03,
    'normalDiscount': 0.05,
  },
  'G': {
    'price': 2.5,
    'baseValue': 20,
    'subValueDiscount': 0.04,
    'normalDiscount': 0.06,
  },
}

def calcGas(littersSold, typeOfGas):
  gasInfo = gasStationInfo[typeOfGas]

  baseLitters = gasInfo['baseValue']
  subDiscount = gasInfo['subValueDiscount']
  normalDiscount = gasInfo['normalDiscount']
  litterPrice = gasInfo['price']

  if littersSold <= baseLitters:
    return (litterPrice * (1 - subDiscount)) * littersSold

  return (litterPrice * (1 - normalDiscount)) * littersSold


print(calcGas(20, 'G'))
