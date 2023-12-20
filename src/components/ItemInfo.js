import React, { Component } from 'react'

export class ItemInfo extends Component {
    render() {
        return (
            <div className='itemInfo'>
                <div>
                    <img src={"./img/" + this.props.item.img} alt={this.props.item.title} onClick={() => this.props.itemInfoShow(this.props.item)} />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.category}</p>
                    <b >{this.props.item.price}</b>
                    <p>{this.props.item.description}</p>
                    <div className='addToCart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default ItemInfo