SELECT
  p.ProductName AS 'Produto',
  MIN(od.Quantity) AS 'Mínima',
  MAX(od.Quantity) AS 'Máxima',
  ROUND(AVG(od.Quantity), 2) AS 'Média'
FROM
  w3schools.orders AS o
  LEFT JOIN w3schools.order_details AS od
    ON o.OrderID = od.OrderID
  LEFT JOIN w3schools.products AS p
    ON p.ProductID = od.ProductID
GROUP BY
  p.ProductName
HAVING
  ROUND(AVG(od.Quantity), 2) > 20.00
ORDER BY
  AVG(od.Quantity) ASC,
  p.ProductName ASC;
