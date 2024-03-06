import React from "react";

export default class LeftSection extends React.Component {
    render() {
        return (
            <>
                <div class="col-2 left_section">
                    <div class="category_content">
                        <h6>Category</h6>
                        <a href=""><span> - </span>Fashion</a>

                        <h6 class=" mt-3"><a href="" style={{ fontWeight: '600' }}>Men</a></h6>
                        <div class="men_items">
                            <a href="">Clothing</a>
                            <a href="">Shoes</a>
                            <a href="">Jewellery</a>
                            <a href="">Watches</a>
                            <a href="">Wallets</a>
                        </div>
                    </div>
                    <div class="amazon_prime mt-3">
                        <h6>Amazon Prime</h6>
                        <input type="checkbox" class="checkbox" />
                        <label for="" style={{ color: "skyblue", fontSize: "15px" }}>prime</label>
                    </div>
                    <div class="pay_on_delivery mt-3">
                        <h6>Pay On Delivery</h6>
                        <input type="checkbox" class="checkbox" />
                        <label for="" style={{ color: "skyblue", fontSize: "15px", display: "inline-block" }}>Eligible for Pay On
                            Delivery</label>
                    </div>
                    <div class="Brands mt-3">
                        <h6>Brands</h6>
                        <input type="checkbox" class="checkbox" /> <a for="" style={{ color: "skyblue" }}>SJeware</a> <br />
                        <input type="checkbox" class="checkbox" /> <a for="" style={{ color: "skyblue" }}>Bangalore Refinery</a> <br />
                        <input type="checkbox" class="checkbox" /> <a for="" style={{ color: "skyblue" }}>Adidas</a> <br />
                        <input type="checkbox" class="checkbox" /> <a for="" style={{ color: "skyblue" }}>Fire-Boltt</a> <br />
                        <input type="checkbox" class="checkbox" /> <a for="" style={{ color: "skyblue" }}>WildHorn</a>
                    </div>
                    <div class="new_arrival">
                        <h6>New Arrival</h6>
                        <a href="">Last 30 days</a>
                        <a href="">Last 90 days</a>
                    </div>
                    <div class="price">
                        <h6>Price</h6>
                        <a href="">Under ₹1,000</a>
                        <a href="">₹1,000 - ₹5,000</a>
                        <a href="">₹5,000 - ₹10,000</a>
                        <a href="">₹10,000 - ₹20,000</a>
                        <a href="">Over ₹20,000</a>
                    </div>
                    <div class="deals_discount">
                        <h6>Deals Discount</h6>
                        <a href="">All Discounts</a>
                        <a href="">Today's Deals</a>
                    </div>
                    <div class="discount">
                        <h6>Discount</h6>
                        <a href="">10% Off or more</a>
                        <a href="">25% Off or more</a>
                        <a href="">35% Off or more</a>
                        <a href="">50% Off or more</a>
                        <a href="">60% Off or more</a>
                        <a href="">70% Off or more</a>
                    </div>
                    <div class="seller">
                        <h6>Seller</h6>
                        <input type="checkbox" class="checkbox" /><a href="">Cocoblu Retail</a> <br />
                        <input type="checkbox" class="checkbox" /><a href="">VRP Telematics</a> <br />
                        <input type="checkbox" class="checkbox" /><a href="">RetailEZ Pvt Ltd</a> <br />
                        <input type="checkbox" class="checkbox" /><a href="">Puma Sports India</a> <br />
                        <input type="checkbox" class="checkbox" /><a href="">Campusactivewear</a> <br />
                        <input type="checkbox" class="checkbox" /><a href="">Cart2India Online</a> <br />
                        <input type="checkbox" class="checkbox" /><a href="">SRK ENTERPRISE</a> <br />
                    </div>
                    <div class="availability">
                        <h6>Availability</h6>
                        <input type="checkbox" class="checkbox" /><a href="">Include Out of Stock</a> <br />
                    </div>
                </div>
            </>
        )
    }
}