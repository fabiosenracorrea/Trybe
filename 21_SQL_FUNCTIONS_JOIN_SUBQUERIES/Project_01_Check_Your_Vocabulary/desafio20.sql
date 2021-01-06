USE hr;
DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN employee_email VARCHAR(255))
BEGIN

SELECT
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
  d.DEPARTMENT_NAME AS 'Departamento',
  j.JOB_TITLE AS 'Cargo'
FROM
  hr.employees AS e
  LEFT JOIN hr.job_history AS jh
    ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
  LEFT JOIN hr.departments AS d
    ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
  LEFT JOIN hr.jobs AS j
    ON j.JOB_ID = jh.JOB_ID
WHERE
  e.EMAIL = employee_email
ORDER BY
  d.DEPARTMENT_NAME ASC,
  j.JOB_TITLE ASC
;

END $$

DELIMITER ;
