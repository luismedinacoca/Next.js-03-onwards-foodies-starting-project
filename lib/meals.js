import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  // adding an artificial delay to simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare('SELECT * FROM meals').all();
}

/*
- db.prepare('SELECT * FROM meals').all() => when fetching data from the database.
- db.prepare('SELECT * FROM meals').run() => when inserting, updating or deleting data from the database.
- db.prepare('SELECT * FROM meals').get() => when fetching a single row from the database.
*/