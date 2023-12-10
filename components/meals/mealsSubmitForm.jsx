"use client";
import { useFormStatus } from "react-dom";
import classes from "./submit-form.module.css";
const MealsSubmitForm = () => {
  const { pending } = useFormStatus();
  return (
    <p className={classes.actions} >
      <button disabled={pending} type="submit">{pending ? "Submitting meal..." : "Share Meal"}</button>
    </p>
  );
};
export default MealsSubmitForm;
