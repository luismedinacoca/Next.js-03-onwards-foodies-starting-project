import sql from 'better-sqlite3';

const db = sql('meals.db');

// this function is called server-side -> getMeals() with 'S'
export async function getMeals() {
  // adding an artificial delay to simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //throw new Error('Loading meals failed!');

  return db.prepare('SELECT * FROM meals').all();
}

// this function is called client-side -> getMeal() without 'S'
export function getMeal(slug){
  //return db.prepare('SELECT * FROM meals WHERE slug = ' + slug) // this is not safe, it is vulnerable to SQL injection
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

/*
- db.prepare('SELECT * FROM meals').all() => when fetching data from the database.
- db.prepare('SELECT * FROM meals').run() => when inserting, updating or deleting data from the database.
- db.prepare('SELECT * FROM meals').get() => when fetching a single row from the database.
*/