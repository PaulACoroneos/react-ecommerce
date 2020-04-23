import * as React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface StripeCheckoutButtonProps {
    price: number;
}
export const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_aZ25vYQtQ4duP2JhqacykZ0C00zVuUAfC2';
    const onToken = (token: Token) => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};
