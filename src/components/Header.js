import React, { useState } from 'react'
import { GiShoppingBag } from "react-icons/gi";
import Order from './Order';
import SearchBar from "components/SearchBar";




const showOrderList = (props) => {

    let sum = 0;
    props.orderList.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <div>
            {props.orderList.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}></Order>
            ))}
            <div className='checkout'>
                <p>Total: {new Intl.NumberFormat().format(sum)}$</p>
                <button>Checkout</button>
            </div>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='emptyOrderList'>
            <h2>There is no orders right now!</h2>
        </div>
    )
}



export default function Header(props) {


    let [cardOpen, setCardOpen] = useState(false)
    return (
        <header>
            <div className='navbar'>
                <span className='logo'>GameStore</span>
                <div className='nav'>
                    <GiShoppingBag onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shoppingCard ${cardOpen && 'active'}`}></GiShoppingBag>

                    {cardOpen && (
                        <div className='shoppingCardArea'>
                            {props.orderList.length > 0 ? showOrderList(props) : showNothing()}

                        </div>
                    )}

                    <ul>
                        <li>About us</li>
                        <li>Contacts</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className='presentation'>
                <h1>GameStore</h1>
                <p>Embark on an epic gaming journey with our cutting-edge video game website!</p>
                <SearchBar onSearch={props.onSearch} />
            </div>

        </header>
    )
}

