import React from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100
  const publishableKey = "pk_test_WhV5k5Kem5NFpPVr5jRNv8l100xKDl1LYd"

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: PriceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful")
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error))
        alert("There was an issue with your payment. Please sure you use the provided credit card")
      })
  }

  return <StripeCheckout label="Pay now" name="E-catalog" billingAddress shippingAddress description={`Your total is $${price}`} amount={PriceForStripe} panelLabel="Pay now" token={onToken} stripeKey={publishableKey} />
}

export default StripeCheckoutButton
