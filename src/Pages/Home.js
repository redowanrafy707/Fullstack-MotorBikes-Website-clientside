import React from 'react';
import Contact from '../Components/HomeComponents/Contact/Contact';
import Footer from '../Components/HomeComponents/Footer/Footer';
import Header from '../Components/HomeComponents/Header/Header';
import Partners from '../Components/HomeComponents/Partners/Partners';
import Services from '../Components/HomeComponents/Services/Services';
import Testimonials from '../Components/HomeComponents/Testimonials/Testimonials';

const Home = () => {
    return (
        <main>
            <Header />
         
            <Services />
         
            <Testimonials />
            <Partners />
            <Contact />
            <Footer />

        </main>
    );
};

export default Home;