import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


const MobileProducts = () => {

    const [productList, setproductList] = useState([]);
    const [wishlistOrNot, setwishlistOrNot] = useState(false);



    const addWishlist = () => {

        if (wishlistOrNot == false) {
            setwishlistOrNot(true);
        } else {
            setwishlistOrNot(false);
        }
        // setwishlistOrNot(true);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            setproductList(response.data.products);
            //   console.log('response.data', response.data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    let dummyArray = [];

    for (let index = 0; index < productList.length; index++) {
        dummyArray.push(
            <div className='col-4'>
                <Card className='mx-auto' style={{ width: '19rem', height: '500px', marginBottom: '20px' }}>
                    <div style={{ height: '200px', width: '200px' }}>
                        <img src={productList[index].thumbnail} style={{ height: '100%', width: '100%' }} />
                        <div className='wishlistIcon'>
                            {wishlistOrNot ? <button onClick={addWishlist} style={{ border: '2px solid', background: 'red' }}><i class="fa-regular fa-heart"></i></button> : <button onClick={addWishlist}><i class="fa-regular fa-heart"></i></button>}
                        </div>
                    </div>


                    <Card.Body>
                        <Card.Title className='product_name'>{productList[index].title} </Card.Title>

                        <span className='price'>Price: {productList[index].price}</span>
                        <span className='rating'> rating: {productList[index].rating}</span>
                        <span className='stock'> stock:{productList[index].stock}</span>
                        <span className='discount_percentage'> ({productList[index].discountPercentage}% off)</span>

                        <Card.Text className='product_image_description'>
                            {productList[index].description}
                        </Card.Text>
                        <input type='text' style={{ width: '100px' }} />

                        {/* <input type="button" value='+' variant="success" id={productList[index].id} className='mx-2 bg-primary' onClick={increment} />
                        <input type="button" value='-' variant="primary" className='bg-success' onClick={decrement} />
                        <input type='button' value='Add to cart' id={productList[index].id} onClick={addToCart} className='mt-1' style={{ float: 'right' }} />
                    */}
                        <input type="button" value='+' variant="success" id={productList[index].id} className='mx-2 bg-primary' />
                        <input type="button" value='-' variant="primary" className='bg-success' />
                        <input type='button' value='Add to cart' id={productList[index].id} className='mt-1' style={{ float: 'right' }} />

                    </Card.Body>
                </Card>
            </div>
        )

    }

    return (
        <>
            <div className='container mt-5' style={{ background: 'darkgray' }}>
                <h1 className="">Today's Deals</h1>
                <div className='row gx-0' >
                    {dummyArray}
                </div>
            </div>
        </>
    )
}

export default MobileProducts;