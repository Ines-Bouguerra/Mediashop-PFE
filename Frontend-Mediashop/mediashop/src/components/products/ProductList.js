import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/products/'
})
export default class ProductList extends Component {
    state = {
        products: []
    }
    constructor() {
        super();
        api.get('/product_list').then(res => {
            console.log(res.data)
            this.setState({ products: res.data })
        })
    }

    render() {
        return (
            <div>
                {this.state.products.map(product => <p key={product.id}>{product.name}</p>)}
            </div>
        )
    }
}
