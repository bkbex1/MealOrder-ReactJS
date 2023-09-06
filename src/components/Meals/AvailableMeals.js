import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';


const AvailableMeals = ()=>{
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState(null)


    useEffect(()=>{
      const fetchMeals = async ()=>{
        setIsLoading(true)
        const response = await fetch('https://meal-orderlist-reactjs-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
        const responseData = await response.json()
        
        const loadedMeals = []

        for(const key in responseData){
          loadedMeals.push({
            id:key,
            name: responseData[key].name,
            description:responseData[key].description,
            price:responseData[key].price,
          })
        }
        setMeals(loadedMeals)
        setIsLoading(false)
      }
      fetchMeals().catch((error)=>{
        setIsLoading(false)
        setHttpError(error.message)
      })
    }, [])

    if(isLoading){
      return <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    }


    if(httpError){
      return <section className={classes['meals-loading']}>
        <p>{httpError}</p>
      </section>
    }
    const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal}>{meal.name}</MealItem>)

    return <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
}

export default AvailableMeals;