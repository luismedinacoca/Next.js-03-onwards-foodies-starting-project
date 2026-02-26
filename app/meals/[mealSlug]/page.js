// localhost:3000/meals/some-meals
import { notFound } from 'next/navigation'
import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'

// export const metadata = {
//   title: 'All Meals',
//   description: 'Browse the delicious meals shared by our vibrant community.',
// }

export async function generateMetadata({ params }) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) {
    return { title: 'Meal Not Found' };
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if(!meal) {
    return notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, '<br />'),
        }}>
        </p>
      </main>
    </>
  )
}