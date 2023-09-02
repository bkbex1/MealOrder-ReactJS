import classes from './Header.module.css'
import {Fragment} from 'react';
import HeadeCardButton from './HeaderCardButton';
import mealsImage from '../../assets/meals.jpg'

const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeadeCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!a"/>
        </div>
    </Fragment>
}


export default Header;