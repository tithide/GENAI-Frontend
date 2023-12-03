import React, { forwardRef } from 'react'
import './CartProduct.css'
import { useStateValue } from '../../StateProvider';
import { Button } from 'react-bootstrap'

const CartProduct = forwardRef((props,ref) => {
    const { id, image, title, price, rating, hideButton } = props;
    // const [{ cart },dispatch] = useStateValue(); ---> to avoid warning
    const [,dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id:id
        })
    }
    return (

       
        <div className='cartProduct justify-content-evenly' ref={ref}>
            <img src={image} alt="Cart product"  className='cartProduct__image' />
            <div className='product__info'>
                <p className='cartProduct__title'>{title}</p>                
                <div className="cartProduct__rating justify-content-start">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <div className='d-flex flex-row'>
                <p className='cartProduct__title'>₹ {price}</p>
                </div>
                <div className='d-flex flex-column'>
                {!hideButton && (
                    <Button variant="warning" onClick={removeFromCart}>Remove From Cart</Button>
                )}
                </div>
                
            </div>
        </div>
        
    )
})

export default CartProduct