import React from "react";

import NavbarFirst from '../HeaderComponents/navbarFirst'
import Footer from '../HeaderComponents/footer';
import NavbarSecond from '../HomePageComponents/1navbarSecond'
import NavbarThird from '../HomePageComponents/2navbarThird'
import TopCorousel from '../HomePageComponents/3topCorousel'
import Offer_Section1 from '../HomePageComponents/4offerSection1'
import Offer_Section2 from '../HomePageComponents/5offerSection2 '
import FixedCorousel from "../HomePageComponents/6fixedCorousel_1";
import FixedCorousel_2 from "../HomePageComponents/7fixedCorousel_2";



export default class HomePage extends React.Component {
    render() {
        return (
            <>
            <NavbarFirst/>
            <NavbarSecond/>
            <NavbarThird/>
            <TopCorousel/>
            <Offer_Section1/>
            <Offer_Section2/>
            <FixedCorousel/>
            <FixedCorousel_2/>
            <Footer/>
          </>
        )
    }
}