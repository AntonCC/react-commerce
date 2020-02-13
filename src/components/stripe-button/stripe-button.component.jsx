import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_Z7jJCliZV8OSj3W5iv3dI2yg0074ZWtPBk"

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return  (
        <StripeCheckout
            label='Pay Now'
            name='ANTN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/HxX.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton