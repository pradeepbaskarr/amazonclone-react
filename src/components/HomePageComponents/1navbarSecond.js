import React from "react";

import  { Link } from "react-router-dom";

export default class NavbarSecond extends React.Component{

     openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
     closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

    render(){
        return (
            // <!-- ////////////////-------   NAV SECOND  -----------------/////////////////// -->


            <section className="navbar_second">
              <nav className="navbar navbar-expand-lg navbar-light text-white" style={{backgroundColor: "#232f3e"}}>
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto" style={{height: "40px"}}>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <div id="mySidenav" className="sidenav" style={{zIndex: "4"}}>
                            <a href="javascript:void(0)" className="closebtn sidenav_close_button" onClick={this.closeNav}>&times;</a>
                            <h6>Trending</h6>
                            <a href="Mens-collection.html">Best Sellers</a>
                            <a href="#">New Releases</a>
                            <a href="#">Movers and Shakers</a>
                            <hr/>
                            <h6>Digital Content And Devices</h6>
                            <a href="#">Echo & Alexa</a>
                            <a href="#">Fire TV</a>
                            <a href="#">Kindle E-Readers & eBooks</a>
                            <a href="#">Audible Audiobooks</a>
                            <a href="#">Amazon Prime Video</a>
                            <a href="#">Amazon Prime Music</a>
                            <hr/>
                            <h6>Shop By Category</h6>
                            
                            <a href="#">Mobiles,Computers</a>
                            <a href="#">TV,Appliances,Electronics</a>
                            {/* <a href="#">Men's fashion </a> */}
                            <Link to="/menscollectionpage">Men's fashion</Link> 
                            
                          </div>
                          <div className="nav-item" style={{display: "flex"}} onClick={this.openNav}>
                            <span className="nav_second_toggle_button">&#9776;</span>
                            <span className="nav_second_all"> ALL</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item border_hover2">
                        <a className="nav-link text-white" href="#">Amazon mimTV</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white border_hover2" href="#">Sell</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white border_hover2" href="#">Best Sellers</a>
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link text-white border_hover2" href="#">Today's Deals</a> */}
                        <Link className="nav-link text-white border_hover2" to="/MobileProductPage">Today's Deals</Link> 
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white border_hover2" href="#">Mobiles</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white border_hover2" href="#">New References</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white border_hover2" href="#">Customer Services</a>
                      </li>
                      <li className="nav-item">
                        <div className="prime">
                          <a className="nav-link text-white border_hover2 " href="#">Prime</a>
                          <div className="prime_dropdown">
                            <div className="card text-center" style={{width: "23em", padding: "15px"}}>
                              <div className="card-body prime_hover_image p-0" style={{backgroundColor: "#232f3e"}}>
                                <a href=""><img className="prime_hover_image" src="./assets/css/Home-page-Images/prime-hover-image.jpg" alt=""
                                    style={{height: "100%"}}/></a>
                              </div>
                            </div>
                          </div>
                        </div>
          
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white border_hover2" href="#">Electronics</a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link p-0 text-white border_hover2" href="#">
                          <div className="join_prime_now_flex">
                            <div className="bawaal">BAWAAL</div>
                            <div className="join_prime_now_div">
                              <span className="join_prime_now">Join Prime Now</span>
                              <span className="redirects_to_prime">Redirects to Prime video.com</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </section>
        )
    }
}