## Exercises 1 - Views

1 - Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

```SQL
  use sakila;

  CREATE VIEW film_with_categories AS (
    SELECT
      f.title AS 'film_title',
      c.category AS 'film_category',
      c.category_id
    FROM
      film AS f
        LEFT JOIN film_category AS fc
          ON fc.film_id = f.film_id
        LEFT JOIN category AS c
          ON c.category_id = fc.category_id
    ORDER BY
      f.title ASC
  );
```
2 - Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

```SQL
  use sakila;

  CREATE VIEW film_info AS (
    SELECT
      a.actor_id,
      CONCAT(a.first_name, ' ', a.last_name) AS actor,
      f.title
    FROM
      film AS f
        LEFT JOIN film_actor AS fa
          ON fa.film_id = f.film_id
        LEFT JOIN actor AS a
          ON a.actor_id = fa.actor_id
    WHERE
      a.actor_id IS NOT NULL
    ORDER BY
      actor ASC,
      f.title ASC
  );
```

3 - Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

```SQL
  use sakila;

  CREATE VIEW address_info AS (
    SELECT
      a.address_id,
      a.address,
      a.district,
      a.city_id,
      c.city,
    FROM
      address AS a
        LEFT JOIN city AS c
          ON a.city_id = c.city_id
    WHERE
      a.city_id IS NOT NULL
    ORDER BY
      c.city ASC,
  );
```
