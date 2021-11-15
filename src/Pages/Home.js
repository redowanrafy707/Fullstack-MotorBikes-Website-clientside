import React from 'react';

import Footer from '../Components/HomeComponents/Footer/Footer';
import Header from '../Components/HomeComponents/Header/Header';

import Services from '../Components/HomeComponents/Services/Services';
import Testimonials from '../Components/HomeComponents/Testimonials/Testimonials';

const Home = () => {
    return (
        <main>
            <Header />
         
            <Services />
         
            <Testimonials />
          
        
            <Footer />

        </main>
    );
};

export default Home;