# 35.3 - DATA SCRAPPING

To scrape data from the web is to get, using any programming language, any piece of data that is stored in a web-page.

For the purpose of this lesson, we will use the *requests* python lib, as it has an easy and straight forward syntax.

To install it, do:

```
python3 -m pip install requests
```

With this library, one request can be simply done by:

```python
import requests

response = requests.get("https://www.anywebsite.com")
print(response.status_code)
print(response.headers["Content-Type"])
print(response.text) # the actual response
```

You can deeply customize how the request is done. For example, it's possible to set up a timeout, and send as many custom headers as you may need/want to:

```python
response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"} timeout=2)
print(response.text)
```

It's also possible to send in data in the request's body:

```python
response = requests.post("http://httpbin.org/post", headers={"Accept": "application/json"} data={'username': 'fabio'})
print(response.text)
```

If you are dealing with an API that returns JSON as default:

```python
response = requests.get("http://api.someapi.com")
print(response.json()) # returns a dict correctly parsed
```

It's a really powerful and easy to use library.

## Extracting Data

Now that we can get the html of a page with our program, we can also extract precisely the piece of content we want from the returned html. For that, we will use *parsel*. You can install it by doing:

```
python3 -m pip install parsel
```

> Tip: If you want to test your scrapping skills, visit [this](http://books.toscrape.com/) and play around!

With *parsel* we can use, different selectors to reach in for the content we want. Let's see an example of a **css selector** in action:

```python
from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
titles = selector.css(".product_pod h3 a::attr(title)").getall()
```

This will get all the available title texts based on the selector we passed in. For more info on CSS selectors, you can visit [here](https://www.w3schools.com/cssref/css_selectors.asp)

*Note*: Play around with the selector and different elements. Try to extract some inner text using the `::text` selector.

### Cleaning the data

As much as we would like, it's not a common thing to be able to simply extract the data ready to be used/stored. For example, if you grab the price of any of the books above, you will get a strange character with it (try it!)

To clean it up, we can use *regular expressions*. The requests library has a build in regex method that let's use exact just what matches what we specify. Instead of `getAll`, you can use `re`, and instead of `get` you can use `re_first` Check it out:

```python
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)
```

The above code will extract all the prices on the page.

## DATABASES - MongoDB

MongoDB has a really great driver for python, that acts almost like it's own interface:

```
python3 -m pip install pymongo
```

```python
from pymongo import MongoClient

client = MongoClient()

db = client.catalogue

book = {
  "title": "A Light in the Attic",
}

document_id = db.books.insert_one(book).inserted_id

print(document_id)

client.close()
```

You simply specify the database you want from the client and can perform the same queries you would on a Mongo CLI. It's important to note that `MongoClient` defaults it's connection to `mongodb://localhost:27017/`, but you can pass in your URI to it!

And since MongoClient is a **context generator**, you can use it with the `with` keyword:

```python
from pymongo import MongoClient

with MongoClient() as client:
  db = client.database
  for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])
```

That way you don't have to worry about closing the connection.

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

[Exercises](./exercises)

----

#### Comments

Data Scrapping is a powerful tool that can help us build programs that automatically update our info based on a website. This gives us the power to model applications and even store website data in personal databases! It's a world certainly bigger than this one lesson can cover.

###### Feedback

As always, any feedback or suggestion is welcomed.

