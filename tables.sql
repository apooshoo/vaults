CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS items (
	id SERIAL PRIMARY KEY,
	name TEXT,
	amount INTEGER,
	recurring BOOLEAN,
	due_date TEXT,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	creditor TEXT,
	user_id INTEGER
);