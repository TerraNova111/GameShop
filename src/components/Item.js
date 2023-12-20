import React, { Component } from 'react'

export class item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt={this.props.item.title} onClick={()=>this.props.itemInfoShow(this.props.item)} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.category}</p>
                <b>{this.props.item.price}</b>
                <div className='addToCart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default item