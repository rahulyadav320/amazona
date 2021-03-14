import React from 'react'
import Data from '../data';
import {Link} from 'react-router-dom';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const product = Data.products.find(x=> x._id === props.match.params.id);
    console.log(product);
    if(!product){
        return <div>Product Not Found</div>
    }
    return (
        <div>
            <Link to="/"> Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating 
                                rating={product.rating} 
                                numReviews={product.numReviews}>
                            </Rating>
                        </li>
                        <li>
                            Price:${product.price}
                        </li>
                        <li>
                            Description: <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <div className="row">
                                <div> Price </div>
                                <div className="price"> ${product.price}</div>
                            </div>            
                        </ul>
                        <ul>
                            <div className="row">
                                <div> Status </div>
                                <div> {product.countInStock? 
                                    <span className="success">In Stock</span> :
                                    <span className="danger">Unavailable</span>}
                                </div>
                            </div>
                        </ul>
                        <ul>
                            <button className="primary block">Add to Card</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
