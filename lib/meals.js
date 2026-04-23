import sql from 'better-sqlite3'
import xss from 'xss'
import slugify from 'slugify'
import fs from 'node:fs'


const db = sql('meals.db')

export async function getAllMeals() {
    return db.prepare('SELECT * FROM MEALS').all()
}

export function getMeal(mealId){
 return db.prepare('SELECT * FROM MEALS WHERE SLUG=?').get(mealId)
}

export async function createMeal (meal){
    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructions)
    const extension = meal.image.name.split('.').pop()
    const filename = `${meal.slug}.${extension}`
    const stream = fs.createWriteStream('public/images/'+filename)
    const bufferedImage = await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), (error)=> {
        if(error) throw new Error('Saving image failed.')
    })
    meal.image = '/images/'+filename
    db.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES(@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `).run(meal)
}