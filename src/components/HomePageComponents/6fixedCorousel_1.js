import React from "react"

export default class FixedCorousel extends React.Component {
    render() {
        return (
            <>
                {/* <!-- ///////////////////// ------------- FIXED COROUSEL - 1 ---------------//////////////// --> */}

                <section class="fixed_corousel_1">
                    <div class="container-fluid">
                        <h4 class="heading">Today Deals <a href="" class="see_all_details_link">see all details</a></h4>
                        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/vivophone-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 25% off</span>
                                                    <span class="offer_duration">Ends in 00:00</span>
                                                    <p class="image_description">Best selling vivo smartphones</p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/seppals-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 46% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description">Mens Footwear:Bata,Hush pupp<span id="dots">...</span><span
                                                        id="more">erisque enim ligula</span><button onclick="myFunction()" id="myBtn">Read more</button>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/Iqoophone-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 21% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description"><i>iQOO Z7s</i></p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/iphone-airpods-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">4% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description">Apple Airpods starting Rs.1249</p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/elctronics-accesories-image.jpg" class="img-thumbnail" alt=""
                                                        style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 95% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description">Best offers on PC Electronics...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/waterscience-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 37% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description">WaterScience best deals Bath Faucets</p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/pumas-shoes-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 65% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description">Best Offers on PUMA Footwear</p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/paint-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 5% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description"><i>Elephant Shield Liquid Rubber..</i></p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/wall-wallpaper-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage"> Upto 87% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description">Wallpapers from wolpin</p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_1_image">
                                                    <img src="./assets/css/Home-page-Images/bath-hardwares-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                                <div style={{marginTop: "5px"}}>
                                                    <span class="offer_percentage">Up to 69% off</span>
                                                    <span class="offer_duration">Deal of the Day</span>
                                                    <p class="image_description">Best deals on Travel Organizes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon carousel_control_prev_icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon carousel_control_next_icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}