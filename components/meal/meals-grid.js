import classes from './meals-grid.module.css'
import MealItem from './meal-item'

import { getAllMeals } from "@/lib/meals"

export default async function MealsGrid (){
    const meals = await getAllMeals()
    return(
        <ul className={classes.meals}>
            {meals.map((meal)=>(
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))}
        </ul>
    )
}