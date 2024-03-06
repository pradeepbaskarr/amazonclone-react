import React from "react";

export default class FixedCorousel extends React.Component {
    render() {
        return (
            <>
                {/* <!-- ///////////////////// ------------- FIXED COROUSEL - 1 ---------------//////////////// --> */}

                <section className="fixed_corousel_2 mt-5">
                    <div className="container-fluid">
                        <div id="carouselExampleControlsNoTouching_2" className="carousel slide" data-bs-touch="false"
                            data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container">
                                        <div className="row">
                                                <div className="col text-center">
                                                    <div className="fixed_corousel_1_image2">
                                                        <a href=""><img src="./assets/css/Mens-collection-images/Mens-clothing.png"
                                                            className="img-thumbnail" alt="" style={{height: "100%", width: "100%", border: "0"}}/></a>
                                                        <span>Men's Clothing</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="fixed_corousel_1_image2">
                                                        <a href=""><img src="./assets/css/Mens-collection-images/Footwear.png" className="img-thumbnail"
                                                            alt="" style={{height: "100%", width: "100%", border: "0"}}/></a>
                                                        <span>Footwear</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="fixed_corousel_1_image2">
                                                        <a href=""><img src="./assets/css/Mens-collection-images/Watches.png" className="img-thumbnail"
                                                            alt="" style={{height: "100%", width: "100%", border: "0"}}/></a>
                                                        <span>Watches</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="fixed_corousel_1_image2">
                                                        <a href=""><img src="./assets/css/Mens-collection-images/LuggageBags.png"
                                                            className="img-thumbnail" alt="" style={{height: "100%", width: "100%", border: "0"}}/></a>
                                                        <span>Luggages & backpacks</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="fixed_corousel_1_image2">
                                                        <a href=""><img src="./assets/css/Mens-collection-images/sunglasses&frames.png"
                                                            className="img-thumbnail" alt="" style={{height: "100%", width: "100%", border: "0"}}/></a>
                                                        <span>Sunglasses & Frames</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="fixed_corousel_1_image2">
                                                        <a href=""><img src="./assets/css/Mens-collection-images/luxuryBrands.png"
                                                            className="img-thumbnail" alt="" style={{height: "100%", width: "100%", border: "0"}}/></a>
                                                        <span>Luxury brands</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="fixed_corousel_1_image2">
                                                        <a href=""><img src="./assets/css/Mens-collection-images/rated-Products-image.png"
                                                            className="img-thumbnail" alt="" style={{height: "100%", width: "100%", border: "0"}}/></a>
                                                        <span>4+ Star rated products</span>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControlsNoTouching_2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon carousel_control_prev_icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControlsNoTouching_2" data-bs-slide="next">
                                <span className="carousel-control-next-icon carousel_control_next_icon2" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}