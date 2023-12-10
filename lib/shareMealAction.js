"use server";
import { redirect } from "next/navigation";
import { saveMeals } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidTextOrNot = text => {
  return !text | (text.trim() == "");
};

export const shareMeal = async (prev,formData) => {
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidTextOrNot(mealData?.title) |
    isInvalidTextOrNot(mealData?.title) |
    isInvalidTextOrNot(mealData?.summary) |
    isInvalidTextOrNot(mealData?.creator) |
    isInvalidTextOrNot(mealData?.creator_email) |
    !mealData.image |
    (mealData.image.size == 0) |
    !mealData.creator_email.includes("@")
  ) {
    return {
      message : "Invalid input"
    }
  }
  await saveMeals(mealData);
  revalidatePath("/meals")
  redirect("/meals");
};
