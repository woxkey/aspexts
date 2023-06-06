import React, {useState} from 'react';
import {AuthForm} from "./auth-form";

export const AuthPage: React.FC = (): React.ReactElement => {
    // const [loggedIn, setLoggedIn] = useState(false);
    return (<div className='auth-page'>
            <AuthForm />
        </div>);
};

