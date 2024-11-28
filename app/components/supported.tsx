import React from 'react'
import AdyenImage from '../images/adyen.svg'
import StripeImage from '../images/stripe.svg'
import CheckoutImage from '../images/checkout.svg'
import BraintreeImage from '../images/Braintree.svg'
import Image from 'next/image'
const SupportedPlatforms = () => {
  return (
    <div className='px-2 mt-6 lg:px-32 flex flex-col justify-center align-middle items-center'>
      <div className='flex space-x-4 items-center align-middle justify-center'>
        <Image src={AdyenImage.src} alt='Adyen' width={72} height={84}></Image>
        <Image src={StripeImage.src} alt='Stripe' width={72} height={84}></Image>
        <Image src={BraintreeImage.src} alt='Braintree' width={72} height={102}></Image>
        <Image src={CheckoutImage.src} alt='Checkout' width={72} height={102}></Image>
 
      

      </div>
      <h1 className='text-right pl-48'>+ 72 Other Gateways</h1>
    </div>
  )
}

export default SupportedPlatforms
