CREATE VIEW top_3_artistas AS (
  SELECT A.name AS artista, COUNT(*) AS seguidores
  FROM follows AS F
    LEFT JOIN artists AS A
      ON F.artist_id = A.id
  GROUP BY F.artist_id
  ORDER BY COUNT(*) DESC, A.name ASC
  LIMIT 3
);
