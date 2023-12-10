import sql from "better-sqlite3"

const db = sql("meals.db")

export const getMeals = async() =>{
    await new Promise(res=>setTimeout(res,2000))
    // throw new Error("dfjhvbjdfvbfhjbv")
    return db.prepare(`SELECT * FROM meals`).all()
}

export const getMeal = async(slug) =>{
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

