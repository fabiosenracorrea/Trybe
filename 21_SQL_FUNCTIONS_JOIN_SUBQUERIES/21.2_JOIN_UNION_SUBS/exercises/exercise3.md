# Exercise 3 - MORE JOINS

As seen [here](https://github.com/XD-DENG/SQL-exercise/tree/master/SQL_exercise_01)

*Note: referenced exercises are 1.10-1.14*

1. Select all the data from the products, including all the data for each product's manufacturer

```SQL
SELECT
	p.*,
    m.Name as Manufacturer_name
FROM Products as p
	LEFT JOIN Manufacturers as m
	ON p.Manufacturer = m.code;
```

2. Select the product name, price, and manufacturer name of all the products.


```SQL
SELECT
	p.Name,
    p.Price,
    m.Name as Manufacturer
FROM Products as p
	LEFT JOIN Manufacturers as m
	ON p.Manufacturer = m.code;
```

3. Select the average price of each manufacturer's products, showing only the manufacturer's code.

```SQL
SELECT
    AVG(p.Price) as Avg_price,
    m.Code as Manufacturer_code
FROM Products as p
	LEFT JOIN Manufacturers as m
	ON p.Manufacturer = m.code
GROUP BY m.Code;
```

4. Select the average price of each manufacturer's products, showing the manufacturer's name.

```SQL
SELECT
    AVG(p.Price) as Avg_price,
    m.Name as Manufacturer_name
FROM Products as p
	LEFT JOIN Manufacturers as m
	ON p.Manufacturer = m.code
GROUP BY m.Name;
```

5. Select the names of manufacturer whose products have an average price larger than or equal to $150.

```SQL
SELECT
    m.Name as Manufacturer_code
FROM Products as p
	LEFT JOIN Manufacturers as m
	ON p.Manufacturer = m.code
GROUP BY m.Name
HAVING AVG(p.Price) > 150;
```
