import React from "react";

import NavbarFirst from "../HeaderComponents/navbarFirst";
import NavbarSecond from "../HomePageComponents/1navbarSecond";
import NavbarThirdMensCollections from "../MensCollectionComponents/1navbarThirdMensCollection";
import Footer from "../HeaderComponents/footer";
import LeftSection from "../MensCollectionComponents/2leftSection";
import FixedCorousel from "../MensCollectionComponents/3fixedCorousel";
import CorouselOfferSection from "../MensCollectionComponents/4corouselOfferSection";

export default class MensCollectionPage extends React.Component {
    render() {
        return (
            <>
                <NavbarFirst />
                <NavbarSecond/>
                <NavbarThirdMensCollections/>
                {/* <!--    FULL SECTION  --> */}
                <section class="full_section">
                    <div class="container-fluid">
                        <div class="row">
                            <LeftSection />
                            <div class="col-10">
                                <FixedCorousel />
                                <CorouselOfferSection/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}