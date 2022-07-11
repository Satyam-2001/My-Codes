import React, { useEffect } from 'react';
import { UserAuth } from "../src/context/AuthContext";
import { GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const goToNewApp = () => {
        if(user?. email) {
            navigate("/newapp")
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            goToNewApp();
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-8'>Home Page</h1>
            <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
            <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
    );
}

export default Signin; 