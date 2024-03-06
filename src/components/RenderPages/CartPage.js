
import NavbarFirst from "../HeaderComponents/navbarFirst"
import NavbarSecond from "../HomePageComponents/1navbarSecond"
import Cart from "../CartPageComponents/cart"
import CartSignIn from "../CartPageComponents/cartFooterSignIn"
import Footer from "../HeaderComponents/footer"

const CartPage =()=>{
    return(
        <>
            <NavbarFirst/>
            <NavbarSecond/>
            <Cart/>
            <CartSignIn/>
            <Footer/>

        </>
    )
}

export default CartPage;
