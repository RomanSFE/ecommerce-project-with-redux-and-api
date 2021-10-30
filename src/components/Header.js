import React from 'react'
import { Link } from 'react-router-dom'
import pnglogo from '../assets/pnglogo.png'

const Header = () => {
    return (
        <>
        <div className="test-ecommerce-header-nav-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                         <div className="header-logo-eco">
                            <Link to="/">
                                <img src={pnglogo} alt=""/>
                            </Link>
                        </div>   
                    </div>
                    <div className="col-md-10">
                         <div className="ecommerce-right-side-cart text-right">
                             <ul>
                                 <li><i className="fas fa-user"></i></li>
                                 <li><i className="fas fa-cart-plus"></i></li>
                             </ul>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header
