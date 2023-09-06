import classes from './Checkout.module.css'
import {useRef, useState} from 'react'
const isEmpty = value =>value.trim()===''
const isFiveChars = value => value.trim().length ===5;

const Checkout= props=>{
    const [formInputValidity, setFormInputValidity] = useState({
        name:true, 
        street:true,
        city:true,
        postalCode:true,
    })
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()


    const confirmHandler = (event)=>{
        event.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value
        
        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormInputValidity({
            name:enteredNameIsValid,
            street:enteredStreetIsValid,
            postalCode: enteredPostalCode,
            city: enteredCityIsValid
        })
        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid

        if(!formIsValid){
            return;
        }
        props.onConfirm({
            name:enteredName,
            street:enteredStreet,
            city:enteredCity,
            postalCode:enteredPostalCode
        })
    }

    return <form onSubmit={confirmHandler}>
        <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' ref={nameInputRef}></input>
            {!formInputValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}></input>
            {!formInputValidity.street && <p>Please enter a valid street!</p>}

        </div>
        <div className={`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`}>
            <label htmlFor='postal'>Postal</label>
            <input type='text' id='postal' ref={postalCodeInputRef}></input>
            {!formInputValidity.postalCode && <p>Please enter a valid postal code!(5 character)</p>}

        </div>
        <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef}></input>
            {!formInputValidity.city && <p>Please enter a valid city!</p>}

        </div>
        <div className={classes.actions}>
            <button onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
}

export default Checkout