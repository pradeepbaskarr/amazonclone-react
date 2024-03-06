import React from "react";

export default class NavbarThird extends React.Component {
    render() {
        return (
            // < !-- ////////////////-------   NAV THIRD  -----------------/////////////////// -->


            < section class="navbar_third" >
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <div class="container-fluid">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            < a class="nav-link active" style={{fontWeight: "600"}} href="#">Amazon Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Kitchen & Home Appliances</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Large Appliances</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Kitchen & Dining</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Furniture</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Home Furnshing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Home Decor </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Home Improvement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Garden & Outdoor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Storage & Organization</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Lightning</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </section >
        )
    }
}