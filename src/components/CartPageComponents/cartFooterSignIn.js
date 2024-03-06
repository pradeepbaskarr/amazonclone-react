import { useState } from "react"
import { Navigate } from "react-router-dom";



const CartSignIn = () => {

const [signInPageAccess, SetSignInPageAccess] = useState('');
    const signin_page=()=>{
        SetSignInPageAccess(12);
    }

    if(signInPageAccess){
        return  <Navigate to="/SIGNINPAGE" />
     }

    return (
        <>
            {/* <!-- //////////////////////[---------  FOOTER SIGN IN ----------  ]   .///////////////////////////// --> */}

            <section class="footer_signin_section">
                <div class="container-fluid">
                    <div class="card text-center border border-2">
                        <div class="card-body">
                            <p>See personalized recommendations</p>
                            <button class="btn btn-warning sponsered_signin" type="button" onclick={signin_page}>Sign in</button>
                            <p class="mt-2 new_customer">New customer?<span><a href="" class="start_here"> Start here.</a></span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartSignIn;