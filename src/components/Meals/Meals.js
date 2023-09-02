import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import React,{Fragment} from 'react'

const Meals= ()=>{
    return <Fragment>
        <MealsSummary></MealsSummary>
        <AvailableMeals></AvailableMeals>
    </Fragment>

}

export default Meals