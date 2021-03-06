import React from 'react';
import productone from '../images/image-product-1.jpg';
import productonetn from '../images/image-product-1-thumbnail.jpg';
import producttwo from '../images/image-product-2.jpg';
import producttwotn from '../images/image-product-2-thumbnail.jpg';
import productthree from '../images/image-product-3.jpg';
import productthreetn from '../images/image-product-3-thumbnail.jpg';
import productfour from '../images/image-product-4.jpg';
import productfourtn from '../images/image-product-4-thumbnail.jpg';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import cart from '../images/icon-cart-two.svg';
import previous from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';
import '../App.css';

const Main = () => {
    return (
        <div className='main-container'>
            <div className='product-img-section'>
                <div className='product-img-container'>
                    <img className='product-img pone' src={ productone } alt='' />
                    <img className='product-img ptwo' src={ producttwo } alt='' />
                    <img className='product-img pthree' src={ productthree } alt='' />
                    <img className='product-img pfour' src={ productfour } alt='' />
                    <div className='arrow-container'>
                        <img className='arrow' src={ previous } alt='' />
                        <img className='arrow' src={ next } alt='' />
                    </div>
                </div>
                <div className='product-thumbnail-section'>
                    <img className='product-thumbnail' src={ productonetn } alt='' />
                    <img className='product-thumbnail' src={ producttwotn } alt='' />
                    <img className='product-thumbnail' src={ productthreetn } alt='' />
                    <img className='product-thumbnail' src={ productfourtn } alt='' />
                </div>
            </div>
            <div className='product-info-section'>
                <div className='info-container'>
                    <p className='company-title'>sneaker company</p>
                    <p className='product-title'>fall limited edition sneakers</p>
                    <p className='product-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                </div>
                <div className='price-section'>
                    <div className='price-container'>
                        <div className='current-price-container'>
                            <p className='current-price'>$125.00</p>
                        </div>
                        <div className='percent-off-container'>
                            <p className='percent-off'>50%</p>
                        </div>                        
                    </div>
                    <div className='old-price-container'>
                        <p className='old-price'>$250.00</p>
                    </div>
                </div>
                <div className='buying-area'>
                    <div className='counter-area'>
                        <div className='counter-section'>
                            <div className='counter-container'>
                                <button className='counter'>
                                    <img src={ minus } alt='' />
                                </button>
                            </div>
                            <p className='counter-text'>0</p>
                            <div className='counter-container'>
                                <button className='counter'>
                                    <img src={ plus } alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='submit-container'>
                        <button className='submit'>                            
                            <p><span className='cart-img'><img src={ cart } alt='' /></span> Add to cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;