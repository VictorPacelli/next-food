'use server'

import { redirect } from 'next/navigation'
import { createMeal } from '../meals'

export async function shareMeal(prevState,formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    try{
        await createMeal(meal)
    }catch(e){
        return {message: 'An error was ocurred trying to create your post. Please try again later.'}
    }
    
    redirect('/meals')
}