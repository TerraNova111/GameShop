import React, { Component } from 'react'
import categories from './Categories'

export class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: categories
        }
    }
    render() {

        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={
                        () => this.props.categorySelect(el.key)
                    }>
                        {el.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default Category