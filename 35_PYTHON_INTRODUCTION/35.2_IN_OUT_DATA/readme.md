# 35.2 IN & OUT DATA

When it comes to writing programs with python, what goes in (and out) of them is very important.

## Packages and Modules

If you create a `example.py` file with some functions in it, you have created a module. A package, in the other hand, is a series of modules/functions we can import from.

## Managing Virtual Environments

It's possible that you have 2 different projects on your computer that rely on the same library, but on different versions of it. To manage that, and to make sure everything works as intended, it's possible to create and manage virtual environments for each project to use.

You can create one by running, on the root of your project:

```shell
python3 -m venv .venv 
```

After that, you need to **activate** it by doing

```bash
source .venv/bin/activate
```

And you can check everything is working with

```bash
which python3
```

## IN DATA

### Input

You can add an input call to your script to collect info from the user:

```python
input("Whats your name?")
```

### Command Line Argument

Using the **sys** module, you can use all the command line arguments passed in to your script:

```python
import sys


if __name__ == "__main__":
  for argument in sys.argv:
      print("Received -> ", argument)
```

## OUT DATA

You can display information to the user running your script using the [print](https://docs.python.org/3/library/functions.html#print) function;

## STRING INTERPOLATION

You can create strings interpolated with variable values (just like template literals in JS) by using what we call *f strings*. Simply add the letter **f** before your string and use any variable enclosed by curly brackets:

```python
x = 10

print(f"The value of x is {x}")
```

## FILE MANIPULATION

You can read and right the content of a file using **open** function:

```python
file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

file.close() # really important with this syntax
```

> warning: if you open a file like this in write ("w") mode, a new file will be created, it doesn't matter with one with that name already existed. It will be completely replaced;

Closing the file is important to respect our operational system limits of files open. There's also a special keyword you can use to manipulate a file without worrying about closing it, as it's done automatically:

```python
with open("file.txt") as file:
  for line in file:
    print('something')
```

## JSON files

Despite it's name, JSON is a universal type, understood by most languages. With python, we have a special module (json) to handle them.

Simple example:

```python
with open("pokemons.json") as file:
  content = file.read()
  pokemon = json.loads(content)["results"]

  print(pokemon[0])
```

You can use the **loads** method to read a JSON in string format, just like above. Or use the **load** method to read directly from the file:

```python
with open("pokemons.json") as file:
  pokemon = json.load(file)["results"]

  print(pokemon[0])
```

And to write a JSON, one can simply use the **dumps** or **dump** method:

```python
grass_type_pokemon = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
  json.dump(grass_type_pokemons, file)

# ----- OR ------- #

with open("grass_pokemons.json", "w") as file:
  json_to_write = json.dumps(grass_type_pokemons)

  file.write(json_to_write)
```

## CSV MANIPULATION

A huge field where python shines nowadays is data science. As such, manipulating common data files (like CSV) is a great thing. You can use the built in **csv** module for that.

```python
import csv

with open("someData.csv") as file:
  beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
  header, *data = beach_status_reader

print(data)
```

Observe the use of unpacking above. By doing that double attribution, we get the first element saved on the `header` variable, while all the rest to the `data`;

We can also use a method to read the CSV like a *dict*: **csv.DictReader**, in which every column-name becomes a key and their values a list.

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

[Exercises](./exercises)

----

#### Comments

Reading files and manipulating command line arguments are strong features python has implemented in a simple way. Mastering it's use can lead to great projects along the way.

###### Feedback

As always, any feedback or suggestion is welcomed.

