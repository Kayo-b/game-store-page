import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = ({shopCart, setCart, cartDisplay, setCartDisplay, cartDisplayTrans, setCartDisplayTrans}) => {
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

    function RemoveFromCart(item) {
        
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
            RemoveFromCart(item)
        }
        setCart([...shopCart])

    }

    function SetQuantity(value, item) {
        let newShopCart = shopCart;
        newShopCart[shopCart.indexOf(item)].quantity = value;
        if(value === "0" || value === "") {
            RemoveFromCart(item)
        }
        setCart([...shopCart])
    }


    return(<div className="shop-cart-background" style={{visibility: cartDisplay}}>
            <div className='shopCartContainer'>
        
            <div className='shopCart' style={{transform: cartDisplayTrans}}>
                <button className="cart-buttons" style={{paddingTop:"1px", paddingBottom: "0px", border: "1px solid #171a21"}} onClick={() => {setCartDisplay('hidden'); setCartDisplayTrans('translateX(100%)')}}>X</button>
                <h3>Shopping Cart</h3>
                <ul className="cartList">{shopCart.map(item => 
                    <li key={item.dealID + shopCart.indexOf(item)} className="button-list">

                    <button className="cart-buttons" onClick={() => RemoveFromCart(item)}>x</button><div className="item-title-cart" ><div className="inner-item-title-cart">{item.title}</div></div>
                    <button className="cart-buttons" onClick={() => AddQuantity(item)}>+</button>
                    <input className="amoutInput" max="99" min="0" style={{borderRadius: "2px", textAlign:"center", fontSize:"medium", minWidth:"20px"}} value={item.quantity} onChange={(e) => SetQuantity(e.target.value, item)}></input>
                    <button className="cart-buttons" onClick={() => SubtractQuantity(item)}>-</button>
                    </li>
                    )}
                </ul>
                {shopCart.length === 0 ? "Cart is empty." : 
                <div style={{color:"#171a21", fontSize:"medium", padding: "0px", margin: "0px"}}>
                <p style={{height: "7px"}}>Raw Price: ${calculateSubtotal().noDiscount} USD</p>
                <p style={{height: "7px"}}>Discount:-${calculateSubtotal().totalDiscount} USD</p>
                <p style={{height: "7px"}}>Subtotal: ${calculateSubtotal().subtotal} USD</p>
                </div>
                }
                
            </div>
        </div>
    </div>
        
    )
}
export default Cart
