import React from "react";

export default class TopCorousel extends React.Component {
    render() {
        return (
            // < !-- //////////////// ----------- TOP COROUSEL --------- //////////////////////// -->

            < section class="top_corousel" >
            <div class="container-fluid">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="./assets/css/Home-page-Images/smartphones-corousel.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="./assets/css/Home-page-Images/shirt-image-corousel.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/css/Home-page-Images/kitchen-item-corousel-image.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/css/Home-page-Images/tide-image-corousel.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/css/Home-page-Images/lipstick-image-corousel.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" style={{top: '75px', height: '200px'}} type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" style={{top: '75px', height: '200px'}} type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </section >
        )
    }
}



// import React from "react";

// export default class TopCorousel extends React.Component{
//     render(){
//         return()
//     }
// }