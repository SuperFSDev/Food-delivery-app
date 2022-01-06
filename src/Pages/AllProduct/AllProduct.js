import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Food from '../Home/Food';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://food-dalivary.herokuapp.com/products')
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);

	return (
		<>
			<section className="_ftre_fd_dlvry2_sec">
				<div className="container">
					<div className="_ftre_fd_dlvry2_top">
						<h1 className="_ftre_fd_dlvry2_tit4">
							All Products
						</h1>
						<h1 className="_ftre_fd_dlvry2_titl">
							Wait a minute for delicious.
						</h1>
					</div>
					<div className="row">
						{
							products.length > 0 ? products.map(product => <Food
								key={product._id}
								product={product}
							></Food>)
								:
								<div className="text-center">
									<Spinner animation="border" variant="danger" />
								</div>
						}
					</div>
				</div>
			</section>
		</>
	);
};

export default AllProduct;