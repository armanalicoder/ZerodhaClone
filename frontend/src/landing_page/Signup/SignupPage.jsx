import React from 'react'
import Signup from './Signup'
import InvestmentOptions from './InvestmentOptions'
import BenefitsDemat from './BenefitsDemat'
import ExploreAccountTypes from './ExploreAccountTypes'
import Faqs from './Faqs'
import Footer from '../Footer'
import Navbar from '../Navbar'
import OpendematAccount from "./OpendematAccount"
import OpenAccount from "../OpenAccount"
function SignupPage() {
  return (
    <>
        <Signup/>
        <InvestmentOptions/>
        <OpendematAccount/>
        <BenefitsDemat/>
        {/* <ExploreAccountTypes/> */}
        <Faqs/>
        <OpenAccount/>
    </>
  )
}

export default SignupPage
