CREATE VIEW perfil_artistas AS (
  SELECT artista, album, seguidores
  FROM
  (
    SELECT
      A.ID AS artist_id,
      A.name AS artista,
      AB.name AS album
    FROM albums AS AB
      LEFT JOIN artists AS A
      ON AB.Artist_id = A.id
  ) AS artist_info
  LEFT JOIN
  (
    SELECT
      COUNT(*) AS seguidores,
      artist_id AS a_id
    FROM follows
    GROUP BY artist_id
  ) AS follow_info
  ON artist_info.artist_id = follow_info.a_id
  ORDER BY seguidores DESC, artista ASC, album ASC
);
