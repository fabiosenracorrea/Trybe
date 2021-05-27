**Exercício 1:** Soldier and Jedi should be implementations of the same abstract class, as the 'fight_enemy' method does not distinguish between Soldier & Jedi, only expects them to have an *attack* method.

```python
from abc import ABC, abstractmethod

class Humanoid(ABC):
    @abstractmethod
    def attack(self, level):
        pass

class Soldier(Humanoid):
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1

class Jedi(Humanoid):
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 100

class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()
```

**Exercício 2:** Simply apply the **Iterator** format to it.

```python
from collections.abc import Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return f"<{self.valor}s de {self.naipe}s>"


class Baralho(Iterator):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __iter__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

        self.card_index = 0

        return self

    def __next__(self):
        card = self._cartas[self.card_index]

        self.card_index += 1

        return card.__repr__()


baralho = Baralho()
sequence = iter(baralho)
print(next(sequence))
print(next(sequence))
print(next(sequence))
print(next(sequence))
print(next(sequence))
```

**Exercício 3:** Simply inverse the attributes.

```python
class BaralhoInverso(Baralho):
    def __iter__(self):
        self.naipes.reverse()
        self.valores.reverse()

        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

        self.card_index = 0

        return self

    def __next__(self):
        card = self._cartas[self.card_index]

        self.card_index += 1

        return card.__repr__()
```
**Exercício 4:** Multiple ways of doing this. One if suggested below.

```python
class Baralho(Iterator):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, method=""):
        self.method = method

        if (method == 'reverse'):
            self.naipes.reverse()
            self.valores.reverse()

    def __iter__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

        self.card_index = 0

        return self

    def __next__(self):
        card = self._cartas[self.card_index]

        self.card_index += 1

        return card.__repr__()
```

**Exercício 5:** Simply get the SVG class to implement our abstract class.

```python
from abc import ABC, abstractmethod


class ImageInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage(ImageInterface):
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def draw(self):
        return f"SVG {self.png_path} with {self.format}"
```

**Exercício 6:** Abstract Tax away.

```python
class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        if imposto == 'ISS':  # Should we have an if for every tax?
            return self.__calcular_iss()

        if imposto == 'ICMS':
            return self.__calcular_icms()

    def __calcular_iss(self):
        return self.valor * 0.1

    def __calcular_icms(self):
        return self.valor * 0.06

# ---- SOLUTION -----

class Tax:
  def __init__(self, name, rate):
    self.rate = rate
    self.name = name


class Budget:
  def __init__(self, value):
    self.value = value

  def calculate_tax(self, tax): # you could also just pass in the rate directly here. It depends on the bigger picture.
    return self.value * tax.rate
```

**Exercício 7:** We have a bunch of information that should be relative to a CreditCard entity

```python
class CreditCard:
  def __init__(
    self,
    credit_card_name,
    credit_card_number,
    credit_card_month,
    credit_card_year,
    credit_card_security_code,
  ):
    self.credit_card_name = credit_card_name
    self.credit_card_number = credit_card_number
    self.credit_card_month = credit_card_month
    self.credit_card_year = credit_card_year
    self.credit_card_security_code = credit_card_security_code

class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card

    # ...
```
