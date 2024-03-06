import React from "react";

export default class SignInContent extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="center_box mx-auto">
                    <div class="logo">
                        <img class="logo_image" style={{height: "100%"}} src="./assets/css/Home-page-Images/amazon-logo-image.png" alt=""/>
                    </div>
                    <div class="card mx-auto" style={{width: "360px"}}>
                        <div class="card-body text-left" style={{padding: "2rem 2rem !important"}}>
                            <h3 class="card-title">Sign in</h3>
                            <div class="mb-2 text-left">
                                <label for="exampleFormControlInput1" class="form-label email_label">Email or mobile phone number</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-warning" type="button">continue</button>
                            </div>
                            <div class="mt-2">
                                <p class="agree_para">By continuing, you agree to Amazon's <span class="privacy_notice">Conditions of Use and Privacy Notice.</span></p>
                            </div>
                            <a class="need_help">Need help?</a>
                        </div>
                    </div>

                    <div>
                        <p class="text-center mt-3" style={{fontSize: "12px"}}>-------- New to Amazon? ---------</p>
                    </div>
                    <div class="d-grid gap-2 col-3 mx-auto">
                        <button class="btn btn-primary new_account" type="button">Create your Amazon account</button>
                    </div>
                </div>
            </div>
        )
    }
}