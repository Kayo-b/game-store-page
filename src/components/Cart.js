import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = ({shopCart, setCart, cartDisplay, setCartDisplay}) => {
    const [cartContent, setCartContent] = useState('')
    const [subtotal, setSubtotal] = useState(0)
    
    // const location = useLocation();
    
    // const {title} = location.state
    // console.log(location)
    //const {title, price, saving} = location.state;
 
    // useEffect(() => {
    //     console.log("useEffect")
    // },)
    
    function calculateSubtotal() {
        let count = 0;
        let discount = 0;
       
        shopCart.map(item => count += Number(item.salePrice * item.quantity));
        shopCart.map(item => discount += Number(item.normalPrice * item.quantity));
        let returningValues = {
            
            subtotal: (Math.round(count * 100) / 100).toFixed(2),
            totalDiscount: (Math.round(discount * 100) / 100).toFixed(2),
            noDiscount: Math.round((discount + count) * 100 / 100).toFixed(2)
            
        }
        return returningValues;
    }
   
    // console.log(title)
    // setcartContent(title, price, saving)

    function RemoveFromCard(item) {
        
        let newShopCart = shopCart
        newShopCart.splice(shopCart.indexOf(item), 1)

        setCart([...shopCart])
    }

    function AddQuantity(item) {
        let newShopCart = shopCart;
        newShopCart[shopCart.indexOf(item)].quantity += 1;

        setCart([...shopCart])

    }

    function SubtractQuantity(item) {
        let newShopCart = shopCart;
        newShopCart[shopCart.indexOf(item)].quantity -= 1;
        if(newShopCart[shopCart.indexOf(item)].quantity === 0) {
            RemoveFromCard(item)
        }
        setCart([...shopCart])

    }

    function SetQuantity(value, item) {
        let newShopCart = shopCart;
        newShopCart[shopCart.indexOf(item)].quantity = value;
        if(value === "0" || value === "") {
            RemoveFromCard(item)
        }
        setCart([...shopCart])
    }
    return(
        <div className='shopCartContaienr'>
            <div className='shopCart' style={{display: cartDisplay}}>
                <button onClick={() => setCartDisplay('none')}>X</button>
                <h3>Shopping Cart</h3>
                <p>This is a page under construction</p>
                <ul className="cartList">{shopCart.map(item => 
                    <li key={item.dealID + shopCart.indexOf(item)}>

                    <button onClick={() => RemoveFromCard(item)}>x</button>{item.title}
                    <button onClick={() => AddQuantity(item)}>+</button>
                    <input className="amoutInput" value={item.quantity} onChange={(e) => SetQuantity(e.target.value, item)}></input>
                    <button onClick={() => SubtractQuantity(item)}>-</button>
                    </li>
                    )}
                </ul>
                <p>Price without discount: ${calculateSubtotal().noDiscount} USD</p>
                <p>Discount: ${calculateSubtotal().totalDiscount} USD</p>
                <p>Subtotal: ${calculateSubtotal().subtotal} USD</p>
            </div>
        </div>
    )
}
export default Cart
