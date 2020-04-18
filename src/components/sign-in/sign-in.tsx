import * as React from 'react';
import { FormInput } from '../form-input/form-input';
import './sign-in.styles.scss';
import { CustomButton } from '../custom-button/custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export const SignIn: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        if (name === 'email') return setEmail(value);
        setPassword(value);
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput name="email" type="email" value={email} required handleChange={handleChange} label="email" />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    required
                    handleChange={handleChange}
                    label="password"
                />
                <div className="buttons">
                    <CustomButton type="submit" value="Submit form" onClick={handleSubmit}>
                        Submit
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};
