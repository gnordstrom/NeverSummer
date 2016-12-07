INSERT INTO longboards (name, type) 
VALUES ($1, $2)
RETURNING *