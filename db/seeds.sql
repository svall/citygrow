-- INSERT INTO gardens(name, zipcode, user_id)
-- VALUES
--   ('garden1', '10023', 1),
--   ('garden2', '10019', 1),
--   ('garden3', '10023', 2),
--   ('garden4', '10001', 3);

-- INSERT INTO users(name,age)
-- VALUES
--   ('user 1', 50),
--   ('user 2', 30),
--   ('user 3', 21);

-- INSERT INTO produce(name, description)
-- VALUES
--   ('pepper', 'plant during summer'),
--   ('cilantro', 'herbs'),
--   ('tomato', 'testing tomatoes'),
--   ('beets', 'seasonal');

-- INSERT INTO quadrants(garden_id, produce_id, user_id)
-- VALUES
--   (1, 1, 1),
--   (1, 2, 1),
--   (2, 2, 3),
--   (3, 4, 2);

INSERT INTO gardens (name, zipcode, user_id)
VALUES ('ok gdn', '10022', 6);


INSERT INTO quadrants(garden_id)
SELECT id
FROM gardens
WHERE id = (
  SELECT max(id)
  FROM gardens);
