import React from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavbarFirst extends React.Component {
    constructor() {
        super();
        this.state = {
            signInPageAccess: '',
            cartPageAccess: ''
        }
        this.signin_page = this.signin_page.bind(this);
        this.cartPage = this.cartPage.bind(this);
    }

    signin_page() {
        // let signInPagAccess =112;
        this.setState({ signInPageAccess: 12 })
    }

    cartPage() {
        this.setState({ cartPageAccess: 12 })

    }
    render() {
        if (this.state.signInPageAccess) {
            return <Navigate to="/SIGNINPAGE" />
        }

        if (this.state.cartPageAccess) {
            return <Navigate to="/CartPage" />
        }
        return (
            <>
                {/* <!-- ////////////////-------   NAV FIRST  -----------------/////////////////// --> */}

                <section class="navbar_first">
                    <nav class="navbar navbar-expand-lg navbar-white bg-dark navbar_height">
                        <div class="container-fluid">
                            <ul class="navbar-nav mx-auto">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

                                    {/* <a class="navbar-brand" href="./index.html"><img class="logo_image" src="./assets/css/Home-page-Images/amazon-logo-image.png" alt="" /></a> */}
                                    
                                    <Link className="navbar-brand" to="/"><img class="logo_image" src="./assets/css/Home-page-Images/amazon-logo-image.png" alt="" /></Link>


                                    <div class="nav_gap border_hover" style={{ display: 'flex' }} >

                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="btn btn-dark p-0 text-align-left" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            <div style={{ display: 'flex' }}>
                                                <div><span class="nav_location_icon"><i class="fa-solid fa-location-dot"></i></span></div>
                                                <div>
                                                    <span class="nav_address_small">Hello</span>
                                                    <span class="nav_address_large">Select your address</span>
                                                </div>
                                            </div>
                                        </button>



                                    </div>

                                    <div class="input-group w-auto nav_gap">
                                        <button class="btn btn-outline-secondary dropdown-toggle nav_categories" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Deals under 999</button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">All Categories</a></li>
                                            <li><a class="dropdown-item" href="#">Alexa Skills</a></li>
                                            <li><a class="dropdown-item" href="#">Amazon Devices</a></li>
                                            <li><a class="dropdown-item" href="#">Amazon Fashion</a></li>
                                            <li><a class="dropdown-item" href="#">Amazon Fresh</a></li>
                                            <li><a class="dropdown-item" href="#">Amazon Pharmacy</a></li>
                                            <li><a class="dropdown-item" href="#">Appliances</a></li>
                                            <li><a class="dropdown-item" href="#">Apps & Games</a></li>
                                            <li><a class="dropdown-item" href="#">Audible Audiobooks</a></li>
                                            <li><a class="dropdown-item" href="#">Beauty</a></li>
                                        </ul>
                                        <input type="text" class="form-control nav_search_field" placeholder="Search Amazon.in"
                                            aria-label="Text input with 2 dropdown buttons" />
                                        <button class="btn btn-outline-secondary bg-warning" type="button" id="button-addon2"><i
                                            class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>



                                    <div class="language_div dropdown border_hover nav_gap">
                                        <button class="btn btn-secondary bg-transparent border-0 dropdown-toggle" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            En
                                        </button>
                                        <ul class="dropdown-menu language_dropdowns" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item language_dropdown" href="#"><span class="language_select_outer"><span
                                                class="language_select_inside"></span></span>English</a></li>
                                            <li><a class="dropdown-item language_dropdown" href="#"><span class="language_select_outer"><span
                                                class="language_select_inside"></span></span>Tamil</a></li>
                                            <li><a class="dropdown-item language_dropdown" href="#"><span class="language_select_outer"><span
                                                class="language_select_inside"></span></span>Telugu</a></li>
                                            <li><a class="dropdown-item language_dropdown" href="#"><span class="language_select_outer"><span
                                                class="language_select_inside"></span></span>Malayalam</a></li>
                                            <li><a class="dropdown-item language_dropdown" href="#"><span class="language_select_outer"><span
                                                class="language_select_inside"></span></span>Hindi</a></li>
                                        </ul>
                                    </div>

                                    <div className="signin_div text-white nav_gap">
                                        <button class="btn btn-dark" onclick="signin_page()"><span class="nav_signin_small">Hello, sign
                                            in</span><span class="nav_signin_large">Accounts & lists <i
                                                class="fa-solid fa-angle-down"></i></span></button>

                                        <div class="signin_dropdown">
                                            <div class="d-grid gap-2 col-6 mx-auto mt-2">
                                                <button class="btn btn-warning" type="button" onClick={this.signin_page}>Sign in</button>
                                                <p class="mx-auto new_customer">New customer? <a href="" class="start_here">Start
                                                    here</a></p>
                                            </div>
                                            <div class="container">
                                                <div class="row border-top">
                                                    <div class="col mt-2">
                                                        <h6>Your Lists</h6>
                                                        <p class="signin_dropdown_para">Create a Wish List<br />
                                                            Wish from Any Website<br />
                                                            Baby Wishlist<br />
                                                            Discover Your Style<br />
                                                            Explore Showroom
                                                        </p>
                                                    </div>
                                                    <div class="col mt-2 border-left">
                                                        <h6>Your Account</h6>
                                                        <p class="signin_dropdown_para">
                                                            Your Orders<br />
                                                            Your Wish List<br />
                                                            Your Recommendations<br />
                                                            Your Prime Membership<br />
                                                            Your Prime Video<br />
                                                            Your Subscribe & Save Items<br />
                                                            Memberships & Subscriptions<br />
                                                            Your Seller Account<br />
                                                            Manage Your Content and Devices<br />
                                                            Your Free Amazon Business Account</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="border_hover nav_gap">
                                        <a class="nav-link p-0 text-white" href="#"><span class="nav_orders_small">Returns</span><span
                                            class="nav_orders_large"> & Orders</span></a>
                                    </div>

                                    <div class=" text-white nav_gap border_hover">
                                        <button class="btn btn-primary p-0 cart_button" onClick={this.cartPage} style={{ display: 'flex' }}>
                                            <span class="cart_icon"><i class="fa-solid fa-cart-shopping nav_cart_icon lh-0"></i></span>
                                            <span class="cart">cart</span>
                                        </button>
                                    </div>


                                </div>
                            </ul>
                        </div>
                    </nav>
                </section>

                {/* <!-- Button trigger modal  " SELECT YOUR ADDRESS BUTTON --- MODAL -- SECTION " --> */}

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title modal_heading" id="exampleModalLabel">Choose Your Location</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body modal_para">
                                Select a delivery location to see product availability and delivery options
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn-warning mt-2" type="button">Sign in to see your address</button>
                                </div>
                                <p class="text-center mt-2 line_text">----------- or enter an Indian pincode -----------</p>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Apply</button>
                                </div>
                                <p class="text-center mb-1 line_text">----------- or -----------</p>
                            </div>
                            <div class="modal-footer">
                                <div class="dropdown mx-auto">
                                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Deliver outside india
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                        <li><a class="dropdown-item active" href="#">Bangladesh</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Srilanka</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NavbarFirst;