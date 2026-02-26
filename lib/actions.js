'use server';
import { saveMeal } from '@/lib/meals';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const isInvalidText = (text) => {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData){
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  //if(!meal.title || meal.title.trim() === ''){}
  if(
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ){
    //throw new Error('Invalid input');
    return {
      message: '😩 Invalid Input.'
    }
  }

  await saveMeal(meal);
  //revalidatePath('/meals', 'page');           // only that page will be revalidated.
  //revalidatePath('/meals', 'layout');         // all pages under /meals or nested revalidation.
  //revalidatePath('/', 'layout');              // all pages under /
  revalidatePath('/meals');                     // only that path will be revalidated.
  redirect('/meals');
}