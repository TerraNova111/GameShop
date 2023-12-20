import React, { Component } from 'react'
import Item from './Item'
import Category from "components/Category";

export class Items extends Component {
    render() {
        return (
            <main>
                <Category categorySelect={this.props.categorySelect}></Category>
                {this.props.items.map(el => (
                    <Item itemInfoShow={this.props.itemInfoShow} key={el.id} item={el} onAdd={this.props.onAdd} />
                ))}
            </main>
        )
    }
}

export default Items