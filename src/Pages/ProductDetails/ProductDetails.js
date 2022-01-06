import './ProductDetails.css'
import React, { useEffect, useState } from 'react';
import Rating from "react-rating";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://food-dalivary.herokuapp.com/singel-product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    return (
        <div className='container row mx-auto'>
            <div className="col-md-6  ">
                <img src={product.img} alt="" className='d-block p-2' />
            </div>
            <div className="col-md-6  ">
                <div>
                    <h3>{product.title}</h3>
                </div>
                <div className='p-2'>
                    <Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star "
                        className="text-warning d-block py-2"
                        readonly
                    ></Rating>
                    <p>
                        {product.description}
                    </p>

                </div>
                <div className='d-flex '>
                    <h6 className='me-5'>Price</h6>
                    <h6 className='ms-5'>${product.price}</h6>

                </div>
                <div className='mt-2'>
                    <Link to={`/product-order/${id}`} className='btn btn-danger w-75 d-block mx-auto py-2'>Add To Cart</Link>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;