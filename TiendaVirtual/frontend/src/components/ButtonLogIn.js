// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
	apiKey: "AIzaSyDHirO9gRgjxZFFslVwJ-KklvZ1k6D9_4Y",
	authDomain: "latiendavirtual1-5f301.firebaseapp.com",
	projectId: "latiendavirtual1-5f301",
	storageBucket: "latiendavirtual1-5f301.appspot.com",
	messagingSenderId: "212394161549",
	appId: "1:212394161549:web:5b016bbaa591b8de9079c4"
  };
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/inicio',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	callbacks: {
		// Avoid redirects after sign-in.

		signInSuccessWithAuthResult: (authResult) => {
			const obj = {
				id: authResult.user.uid,
				name: authResult.additionalUserInfo.profile.given_name
			}
			localStorage.setItem("data", JSON.stringify(obj));
			return true;
		},
	},
};

function ButtonLogIn() {
	return (
		<div>
			<span className="btn btn-dark btn-large btn-block">
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</span>
		</div>
	);
}

export default ButtonLogIn

