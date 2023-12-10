import MealItem from './meal-item';
import classes from './meal-grid.module.css';
import { getMeals } from '@/lib/meals';

export default  function MealsGrid({ meals }) {

  
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}