import React from "react";

import SignInContent from "../SignInPageComponents/signIn";
import SignInFooter from "../SignInPageComponents/signInFooter";


export default class SignInPage extends React.Component {
    render() {
        return (
          <>
            <SignInContent/>
            <SignInFooter/>
          </>
        )
    }
}