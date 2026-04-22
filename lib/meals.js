import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getAllMeals() {
    return db.prepare('SELECT * FROM MEALS').all()
}

export function getMeal(mealId){
 return db.prepare('SELECT * FROM MEALS WHERE SLUG=?').get(mealId)
}