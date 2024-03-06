import React from "react";

export default class Offer_Section1 extends React.Component {
    render() {
        return (
            // <!-- ///////////////////// ------------- OFFER SECTION -1 ---------------//////////////// -->
            <section class="offer_section1">
                <div class="container-fluid">
                    <div class="row gx-3">
                    {/* <!-- ///////------ COLUMN -------/////////// --> */}
                        <div class="col"> 
                            <div class="p-3 border bg-light">
                                <div class="card border-0">
                                    <div class="card-body p-0">
                                        <h4 class="offer_heading">Up to 70% off | Clearance store</h4>
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/Clearance_store_Desktop.jpg" class="img-thumbnail" alt=""
                                                style={{height: "100%", border: "0"}} />
                                        </div>
                                        <a href="" class="see_more nav-link p-0">see more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col"> {/* <!-- ///////------ COLUMN -------/////////// --> */}
                            <div class="p-3 border bg-light">
                                <h4 class="offer_heading">Up to 60% off | Styles for men</h4>
                                <div class="row g-2">
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/clothing-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Clothing</a>
                                    </div>
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/footwear-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Footwear</a>
                                    </div>
                                </div>
                                <div class="row g-2 mt-2">
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/watches-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Watches</a>
                                    </div>
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/bags&lagguages-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Lagguages&Bags</a>
                                    </div>
                                </div>
                                <a href="" class="see_more nav-link p-0">see more</a>
                            </div>
                        </div>
                        <div class="col"> {/* <!-- ///////------ COLUMN -------/////////// --> */}
                            <div class="p-3 border bg-light">
                                <h4 class="offer_heading">Automotive essentials | Up to 60% off</h4>
                                <div class="row g-2">
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/cleaning-accessories-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Cleaning Acessories</a>
                                    </div>
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/tyre-rim-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Tyre & rim Care</a>
                                    </div>
                                </div>
                                <div class="row g-2 mt-2">
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/helmets-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Helmets</a>
                                    </div>
                                    <div class="col">
                                        <div class="type1_image">
                                            <img src="./assets/css/Home-page-Images/Vaccum-cleaner-image.jpg" class="img-thumbnail brands_small_image" alt="..."/>
                                        </div>
                                        <a href="" class="image_description nav-link p-0">Vaccum cleaner</a>
                                    </div>
                                </div>
                                <a href="" class="see_more nav-link p-0">see more</a>
                            </div>
                        </div>
                        <div class="col"> {/* <!-- ///////------ COLUMN -------/////////// --> */}
                            <div class="p-3 border bg-light">
                                <div class="row">
                                    <div class="col bg-white">
                                        <h4 class="offer_heading">Sign in for your best experience</h4>
                                        <button class="btn btn-warning sponsered_signin" type="button">Sign in</button>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col">
                                        <div class="">
                                            <img src="./assets/css/Home-page-Images/Laptops-Sept2019._CB436595915_.jpg" class="sponsered_image" alt=""
                                                style={{height: "100%", border: "0"}} />
                                        </div>
                                    </div>
                                </div>
                                <a href="" class="see_more nav-link p-0">sponserd !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}