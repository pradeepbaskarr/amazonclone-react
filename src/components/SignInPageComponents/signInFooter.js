import React from "react";


export default class SignInFooter extends React.Component {
    render() {
        return (
            <>
                <div class="card-footer card_footer text-white text-center">
                    <div class="container-fluid">
                        <div class="mx-auto">
                            <a href="">Conditions of Use</a>
                            <a href="">privacy notice</a>
                            <a href="">Help</a>
                            <p class="mt-2" style={{color: "black", fontSize: "13px;"}}>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}