


import React from 'react'
import HeroImage from '../Components/HeroImage/HeroImage'
import HomeToyDisplay from '../Components/HomeToyDisplay/HomeToyDisplay.jsx'
import PopularToys from '../Components/PopularToys/PopularToys.jsx'
import ComingSoonToys from '../Components/ComingSoonToys/ComingSoonToys.jsx'
import ToyBanner from '../Components/ToyBanner/ToyBanner.jsx'
import AboutUs from '../Components/AboutUs/AboutUs.jsx'
import AboutUsText from '../Components/AboutUsText/AboutUsText.jsx'


const Home = () => {


  return (
   <>

      <HeroImage />
      <HomeToyDisplay />
      <ToyBanner />
      <PopularToys />
      <AboutUsText />
      <AboutUs />
      <ComingSoonToys />


   </>
  )
}




export default Home
