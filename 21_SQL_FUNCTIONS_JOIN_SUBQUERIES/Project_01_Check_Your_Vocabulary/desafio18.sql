SELECT
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
  DATE_FORMAT(jh.START_DATE, '%d/%m/%Y') AS 'Data de início',
  DATE_FORMAT(jh.END_DATE, '%d/%m/%Y') AS 'Data de rescisão',
  ROUND((DATEDIFF(jh.END_DATE, jh.START_DATE)/365), 2) AS 'Anos trabalhados'
FROM
  job_history AS jh
  LEFT JOIN employees AS e
    ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) IS NOT NULL
ORDER BY
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME),
  ROUND((DATEDIFF(jh.END_DATE, jh.START_DATE)/365), 2) ASC;
