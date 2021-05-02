import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = ({setName, setImage, setFirstName}) => {

    const responseSuccessGoogle = (response) => {
        console.log(response);
        setFirstName(response.profileObj.givenName)
        setName(response.profileObj.name);
        setImage(response.profileObj.imageUrl);
    }

    const responseErrorGoogle = (response) => {

    }
    

    return (
        <div className="login-section">
            <h1 className="login">Login</h1>
            <h2 className="greet-message">Welcome to CelebConnect</h2>
            <p className="instruction" >Please login with your google account to connect with your favourite celebrity</p>
            <div className="login-button-section">
            <GoogleLogin
                clientId="425530161221-ggg0n4ddco3vsc31el58qt58kciii1ap.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
                
            />
            </div>

            <div className="adjustment">
                <Link to="/profile">
                    Profile Page
                </Link>
            </div>
            
        </div>
    );
};

export default Login;