import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import React from 'react'
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home