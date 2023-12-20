import React, { Component } from 'react'
import { IoTrashBinSharp } from "react-icons/io5";

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}</b>
                <IoTrashBinSharp className='deleteOrder' onClick={() => this.props.onDelete(this.props.item.id)}></IoTrashBinSharp>
            </div>
        )
    }
}

export default Order