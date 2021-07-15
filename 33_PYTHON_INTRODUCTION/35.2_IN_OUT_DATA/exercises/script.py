import random
import sys
import json
import csv

def decomposeName(name):
  for i in range(len(name)):
    lastIndex = len(name) - i
    print(name[0:lastIndex])


def guessTheScrambledWord(words = ['world', 'planet', 'computer', 'mathematics', 'science', 'python', 'javascript']):
  print('Its time to guess a scrambled word!')
  tries = 3
  word = random.choice(words)
  scrambled_word = "".join(random.sample(word, len(word)))

  print(f'The world you need to guess is: {scrambled_word}')

  while tries > 0:
    print(f"You have {tries} tries")
    guess = input("Your guess: ")

    if guess == word:
      print('Good Job!!')
      exit(0)

    tries -= 1

  print(f"Good efforts! The world was {word}")


def guessTheScrambledWordFromFile():
  if len(sys.argv) != 2:
    print('You need to pass in a file.')
    exit(1)

  file = sys.argv[1]

  words = []

  with open(file) as wordList:
    for word in wordList:
      curated = word.replace('\n', '')
      words.append(curated)

  guessTheScrambledWord(words)


def calculatePercents():
  with open('data.json') as file:
    books = json.load(file)
    categoriesPercent = {}
    categoiresCount = {}
    totalBooks = len(books)

    for book in books:
      bookCategories = book['categories']
      for category in bookCategories:
        if category in categoiresCount:
          categoiresCount[category] += 1
        else:
          categoiresCount[category] = 1

        updatedPercent = categoiresCount[category] / totalBooks
        categoriesPercent[category] = updatedPercent

    with open('books.csv', 'w', newline='') as csvfile:
      fieldnames = ['categoria', 'porcentagem']
      writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
      writer.writeheader()

      for category in categoriesPercent.keys():
        percentageWithComma = str(categoriesPercent[category]).replace('.', ',')
        writer.writerow({'categoria': category, 'porcentagem': percentageWithComma})


