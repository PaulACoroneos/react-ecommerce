import * as React from 'react';
import './sign-up.styles.scss';
import { FormInput } from '../form-input/form-input';
import { CustomButton } from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const initialValuesState = {
    displayName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
};

export const SignUp = () => {
    const [values, setValues] = React.useState<any>(initialValuesState);
    const { displayName, email, confirmEmail, password, confirmPassword } = values;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        if (email !== confirmEmail) {
            alert('Emails do not match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            setValues(initialValuesState);
        } catch (error) {
            console.error('error', error);
        }
    };

    const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
        const { name, value } = e.target as HTMLInputElement;
        setValues({ ...values, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required />
                <FormInput
                    type="email"
                    name="confirmEmail"
                    value={confirmEmail}
                    handleChange={handleChange}
                    label="Confirm Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};
