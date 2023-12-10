import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"
import fs from "node:fs"
import { error } from "node:console"

const db = sql("meals.db")

export const getMeals = async() =>{
    await new Promise(res=>setTimeout(res,2000))
    // throw new Error("dfjhvbjdfvbfhjbv")
    return db.prepare(`SELECT * FROM meals`).all()
}

export const getMeal = async(slug) =>{
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export const saveMeals = async(meal)=>{
    meal.slug = slugify(meal.title,{lower:true})
    meal.instructions = xss(meal.instructions)

    const ext = meal.image.name.split(".")[1]
    const filename = `${meal.slug}.${ext}`

    const stream = fs.createWriteStream(`public/images/${filename}`)
    const bufferedImg = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImg),(error)=>{
        if(error)
            throw new error("Failed")
    })

    meal.image = `/images/${filename}`

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
  `).run(meal);
}

