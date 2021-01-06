SELECT
  p.ProductName AS 'Produto',
  p.Price as 'Preço'
FROM
  w3schools.order_details AS od
  LEFT JOIN w3schools.products AS p
    ON p.ProductID = od.ProductID
WHERE
  od.Quantity > 80
ORDER BY
  p.ProductName ASC;
