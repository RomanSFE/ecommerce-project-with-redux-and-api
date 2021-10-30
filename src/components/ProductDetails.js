import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { title, price, image, category, description } = product
    const { productId } = useParams()
    const dispatch = useDispatch()

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log(err)
        })
        dispatch(selectedProduct( response.data))
    }
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetails()

        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    return (
        <>
        <div className="product-details-main-sec-box">
            {Object.keys(product).length === 0 ? (
                <div>Loading ...</div>
            ): (
            
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-details-ecomm-prod-mg">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="product-details-ecomm-prod-content-box">
                            <div className="product-details-ecomm-prod-cont-head">
                                <h4>{title}</h4>
                                <h6>$ {price}</h6>
                            </div>
                            <div className="product-details-ecomm-prod-cont-cat-btn">
                                <h6>Category : {category}</h6>
                                <p>{description}</p>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        </>
    )
}
export default ProductDetails
