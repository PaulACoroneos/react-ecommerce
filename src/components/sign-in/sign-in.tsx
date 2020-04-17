import * as React from 'react';
import { FormInput } from '../form-input/form-input';
import './sign-in.styles.scss';
import { CustomButton } from '../custom-button/custom-button';

export const SignIn: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
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
                <CustomButton type="submit" value="Submit form" onSubmit={handleSubmit}>
                    Submit
                </CustomButton>
            </form>
        </div>
    );
};
