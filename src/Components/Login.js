import React, { Component } from "react";
import "./nav.css";
import "./login.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyAJp0KSIN3_XgExjlUAnrWhQnn_zSVuw5s",
  authDomain: "mini-projet-a9f5f.firebaseapp.com"
});

class Login extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="Login">
        {this.state.isSignedIn ? (
          <span>
            <button
              className="btn btn-warning"
              onClick={() => firebase.auth().signOut()}
            >
              Sign out!
            </button>

            <h1 className="welcome">
              Welcome {firebase.auth().currentUser.displayName}
            </h1>

            <img
              style={{ width: 50, height: 50, position: "left" }}
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Login;
