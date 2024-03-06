import React from "react";

export default class FixedCorousel_2 extends React.Component {
    render() {
        return (
            <>
                {/* <!-- ///////////////////// ------------- FIXED COROUSEL - 2 ---------------//////////////// --> */}

                <section class="fixed_corousel_2">
                    <div class="container-fluid">
                        <h4 class="heading">Checkout the New collections from stores near you <a href="" class="see_all_details_link">see
                            all details</a></h4>
                        <div id="carouselExampleControlsNoTouching_2" class="carousel slide" data-bs-touch="false"
                            data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flower-plot-image1.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flower-plot-image2.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/horse-toy-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/tea-glass-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/pigon-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/wall-pigon-image.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flowerplot-image-1.jpg" class="img-thumbnail" alt=""
                                                        style={{height: "166px !important", width: "165px !important", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flowerplot-image-2.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flowerplot-image-3.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flowerplot-image-4.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flowerplot-image-5.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="fixed_corousel_2_image">
                                                    <img src="./assets/css/Home-page-Images/flowerplot-image-6.jpg" class="img-thumbnail" alt="" style={{height: "100%", border: "0"}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching_2"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon carousel_control_prev_icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching_2"
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