import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = ({shopCart}) => {
    const [cartContent, setCartContent] = useState('')
    const [subtotal, setSubtotal] = useState(0)
    
    // const location = useLocation();
    
    // const {title} = location.state
    // console.log(location)
    //const {title, price, saving} = location.state;
 
    useEffect(() => {
        setCartContent(shopCart)
    }, [])
    
    function calculateSubtotal() {
        let count = 0;
        let discount = 0;
       
        shopCart.map(item => count += Number(item.salePrice));
        shopCart.map(item => discount += Number(item.normalPrice));
        let returningValues = {
            
            subtotal: (Math.round(count * 100) / 100).toFixed(2),
            totalDiscount: (Math.round(discount * 100) / 100).toFixed(2),
            noDiscount: Math.round((discount + count) * 100 / 100).toFixed(2)
            
        }
        return returningValues;
    }
    console.log(shopCart)
    // console.log(title)
    // setcartContent(title, price, saving)
    return(
        <div>
            <h3>Shopping Cart</h3>
            <p>This is a page under construction</p>
            <ul>{shopCart.map(item => <li>{item.title}</li>)}</ul>
            <p>Price without discount: ${calculateSubtotal().noDiscount} USD</p>
            <p>Discount: ${calculateSubtotal().totalDiscount} USD</p>
            <p>Subtotal: ${calculateSubtotal().subtotal} USD</p>
        </div>
        
    )
}
export default Cart

