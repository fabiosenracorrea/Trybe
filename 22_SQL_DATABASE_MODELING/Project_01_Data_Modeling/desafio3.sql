CREATE VIEW historico_reproducao_usuarios AS (
  SELECT U.name AS usuario, S.name AS nome
  FROM song_plays AS SP
    LEFT JOIN songs AS S
      ON S.id = SP.song_id
    LEFT JOIN users AS U
      ON U.id = SP.user_id
  ORDER BY U.name ASC, S.name ASC
);
