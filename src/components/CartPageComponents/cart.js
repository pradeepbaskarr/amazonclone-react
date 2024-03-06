


const Cart = () => {
    return (
        <>
            {/* <!-- //////////////////////[---------  CART SECTION ----------  ]   .///////////////////////////// --> */}

            <section class="cart_section mt-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-9">
                            <div class="row bg-white">
                                <div class="col-4">
                                    <div class="cart_image">
                                        <img src="./assets/css/Home-page-Images/cart-page-image.svg" alt="" style={{height: "100%", width: "100%"}}/>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <h2 class="cart_empty mt-5">Your Amazon Cart is empty</h2>
                                    <span><a class="shop_today_deals" href="">Shop today’s deals</a></span>
                                    <div class="mt-4">
                                        <button class="btn btn-warning" type="button" onclick="signin_page()">Sign in to your</button>
                                        <button class="btn btn-light" type="button" onclick="signup_page()">Sign up now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;