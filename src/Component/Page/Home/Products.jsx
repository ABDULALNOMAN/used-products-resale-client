import React from 'react';
import apple from '../../../assets/CardPicture/apple-iphone-14-pro-max-1.jpg';
import samsung from '../../../assets/CardPicture/samsung-galaxy-s22-plus-5g-2.jpg';
import mi from '../../../assets/CardPicture/xiaomi-12t-pro-1.jpg';

const Products = () => {
    const productsItem = [
        {
            "image": apple,
            "name": "iphone",
            "location": "chittagong",
            "resale": 60000,
            "originl":10000,
            "use": 2,
            "sellerName": 'motin',
        },
        {
            "image": samsung,
            "name": "samsung",
            "location": "dhaka",
            "resale": 40000,
            "originl":20000,
            "use": 1,
            "sellerName": 'karim',
        },
        {
            "image": mi,
            "name": "xiomi",
            "location": "comilla",
            "resale": 60000,
            "originl":30000,
            "use": 2,
            "sellerName": '',
        }
    ]
    return (
        <div className='bg-base-100 '>
            <div className="card card-compact w-96 shadow-xl container mx-auto">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;