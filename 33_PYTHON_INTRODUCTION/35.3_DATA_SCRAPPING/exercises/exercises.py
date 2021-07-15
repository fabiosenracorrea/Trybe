import requests
from parsel import Selector
from pymongo import MongoClient


def baseRequest():
  response = requests.get("https://httpbin.org/encoding/utf8", timeout=15)
  print(response.text)


def githubRequest():
  baseHeaders = {"Accept": "application/json"}
  response = requests.get(
      "https://api.github.com/users", timeout=15, headers=baseHeaders
  )

  users = response.json()
  for user in users:
    print(user["login"], user["url"])


def customHeadersCheck():
  baseHeaders = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    "Accept": "text/html"
  }

  response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    timeout=15,
    headers=baseHeaders
  )
  assert "bot detected" not in response.text


def extractBookData():
  response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
  selector = Selector(text=response.text)

  title = selector.css(".product_main h1::text").get()
  price = selector.css(".product_main .price_color::text").re_first(r"£\d+\.\d{2}")

  description = selector.css(".product_page > p:first-of-type::text").get()
  suffix = "...more"

  if description.endswith(suffix):
    description = description[:-len(suffix)]

  img_url = selector.css("#product_gallery img::attr(src)").get()

  in_stock = selector.css(".instock.availability::text").re_first(r"\d+")


def getBooksTitlesBasedOnCategory():
  with MongoClient() as client:
    db = client.library

    category = input("Which category do you want to search? ")

    books = db.books.find({ 'categories': { '$regex': category } })

    for book in books:
      print(book['title'])



def calculatePublishedBooks():
    with MongoClient() as client:
      db = client.library

      books = db.books.aggregate([
        {'$match': { 'status': 'PUBLISH' }},
        {'$unwind': '$categories'},
        {'$group': {
          '_id': '$categories',
          'total': { '$sum': 1 }
        }},
        {'$sort': { 'total': -1 }}
      ])

      for book in books:
        print(book['_id'], book['total'])


