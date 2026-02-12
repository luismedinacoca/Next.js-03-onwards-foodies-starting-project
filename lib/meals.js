import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}
export async function saveMeal(meal){
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const getTimeTag = () => 
    new Date().toISOString().slice(0, 19).replaceAll('-', '').replace('T', '_').replaceAll(':', '');

  const extension = meal.image.name.split('.').pop(); 
  const fileName = `${meal.slug}_${getTimeTag()}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error) {
      throw new Error('Saving image failed!')
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal)
}


/*
- db.prepare('SELECT * FROM meals').all() => when fetching data from the database.
- db.prepare('SELECT * FROM meals').run() => when inserting, updating or deleting data from the database.
- db.prepare('SELECT * FROM meals').get() => when fetching a single row from the database.
*/