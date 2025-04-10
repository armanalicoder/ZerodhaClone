import React from 'react'
import Navbar from '../Navbar'
import Pricing from './Pricing'
import PricingDescription from './PricingDescription'
import ChargesForAccount from './ChargesForAccount'
import ChargesForOptionvalue from './ChargesForOptionvalue'
import Footer from '../Footer'

function PricingPage() {
  return (
    <>
        <Pricing/>
        <PricingDescription/>
        <ChargesForAccount/>
        <ChargesForOptionvalue/>
    </>
  )
}

export default PricingPage
