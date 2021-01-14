CREATE VIEW cancoes_premium AS (
  SELECT S.name AS nome, COUNT(*) AS reproducoes
  FROM song_plays AS SP
    LEFT JOIN songs AS S
      ON SP.song_id = S.id
    LEFT JOIN users AS U
      ON SP.user_id = U.id
    LEFT JOIN plans AS P
      ON U.plan_id = P.id
  WHERE P.name IN ('familiar', 'universitário')
  GROUP BY SP.song_id
  ORDER BY S.name
);
