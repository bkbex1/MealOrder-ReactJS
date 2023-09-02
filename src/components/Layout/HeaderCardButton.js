import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-contex'

const HeadeCardButton = props =>{
    const [btnIsHighlighted, setButtonIsHighlighted] = useState(false)

    const cartCtx = useContext(CartContext)
    const { items } = cartCtx

    const numberOfCartItelms = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0)

    const btnClasses= `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length===0){
            return
        }
        setButtonIsHighlighted(true)

        const timer = setTimeout(()=>{
            setButtonIsHighlighted(false)
        }, 300)


        return ()=>{
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItelms}</span>

    </button>
}

export default HeadeCardButton