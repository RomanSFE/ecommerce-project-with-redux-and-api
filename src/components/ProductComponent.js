import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allproducts.products)
    const renderList = products.map((product) => {
        const { id, title, price, image, category } = product
        return (
            <div className="col-md-3" key={id}>
                <div className="producr-component-single-product">
                    <Link to={`/product/${id}`}>
                        <div className="product-compo-pro-lst-single-item">
                            <div className="product-component-image-sec">
                                <img src={image} alt="" />
                            </div>
                            <div className="product-component-content-sec">
                                <div className="product-component-content-head">
                                    <h4>{title}</h4>
                                </div>
                                <div className="product-component-content-head">
                                    <h6>Price : {price}</h6>
                                </div>
                                <div className="product-component-content-head">
                                    <h6>Category : {category}</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>      
            </div>      
        )
    });

    return (
        <div className="product-component-main-sec">
            <div className="container">
                <div className="row product-component-main-sec-ex-pdd">
                    {renderList}
                </div>
            </div>
        </div>
    )
}
export default ProductComponent
