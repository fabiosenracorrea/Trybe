SELECT
  CONCAT(e.FirstName, ' ', e.LastName) AS 'Nome completo',
  COUNT(*) AS 'Total de pedidos'
FROM
  w3schools.orders AS o
  LEFT JOIN w3schools.employees as e
    ON o.EmployeeID = e.EmployeeID
GROUP BY
  e.EmployeeID
ORDER BY
  COUNT(*) ASC;
