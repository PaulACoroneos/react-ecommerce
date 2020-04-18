import * as React from 'react';

import './sign-in-and-sign-up.styles.scss';
import { SignIn } from '../../components/sign-in/sign-in';
import { SignUp } from '../../components/sign-up/sign-up';

export const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);
