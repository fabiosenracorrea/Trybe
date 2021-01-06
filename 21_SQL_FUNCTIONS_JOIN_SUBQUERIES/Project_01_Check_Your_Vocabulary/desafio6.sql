SELECT
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
  j.JOB_TITLE AS 'Cargo',
  jh.START_DATE AS 'Data de início do cargo',
  d.DEPARTMENT_NAME AS 'Departamento'
FROM
  hr.job_history AS jh
  LEFT JOIN hr.employees AS e
    ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
  LEFT JOIN hr.jobs AS j
    ON jh.JOB_ID = j.JOB_ID
  LEFT JOIN hr.departments AS d
    ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
WHERE
  j.JOB_TITLE IS NOT NULL
ORDER BY
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) DESC,
  j.JOB_TITLE ASC;
