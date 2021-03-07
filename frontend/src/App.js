import React from 'react';
import Data from './data.js';

function App() {
  return (
    <div className="App">
        <div className="grid-container">
            <header className="row">
             <div><a className="brand" href="/">amazona</a></div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
             </div>
            </header>
            <main>
                <div>
                    <div className="row center">
                        {
                            Data.products.map(product=>(
                                <div key={product._id} className="card">
                                    <a href={`product/${product._id}`}>
                                        <img className="medium" src={product.image} 
                                        alt={product.name}/>
                                    </a>
                                    <div className="card-body">
                                        <a href={`product/${product._id}`}>
                                            <h1>{product.name}</h1>
                                        </a>
                                        <div className="rating">
                                            <span> <i className="fa fa-star"></i> </span>
                                            <span> <i className="fa fa-star"></i> </span>
                                            <span> <i className="fa fa-star"></i> </span>
                                            <span> <i className="fa fa-star"></i> </span>
                                            <div className="price">
                                                ${product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    </div>
  );
}

export default App;
