import React from 'react';
import Hero from '../Components/Hero';
import PopularRoutes from '../Components/PopularRoutes';
import WhyChooseUs from '../Components/WhyChooseUs';
import CustomerSay from '../Components/CustomerSay';
import Works from '../Components/Works';
import PremiumOffers from '../Components/PremiumOffers';
import AppDownloadSection from '../Components/AppDownloadSection';
import AvailableServices from '../Components/AvailableServices';
import Cta from '../Components/Cta';
import FAQ from '../Components/FAQ';
import Partners from '../Components/Partners';
import AdvertisementSection from '../Components/AdvertisementSection';
import RecentlyAddedTickets from '../Components/RecentlyAddedTickets';


const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Works></Works>
           
            <AvailableServices></AvailableServices>
             <AdvertisementSection></AdvertisementSection>
             
       
            <PremiumOffers></PremiumOffers>
            <RecentlyAddedTickets></RecentlyAddedTickets>
           
            <AppDownloadSection></AppDownloadSection>
            <PopularRoutes></PopularRoutes>
            
            <WhyChooseUs></WhyChooseUs>
            <Partners></Partners>
            <FAQ></FAQ>
            <CustomerSay></CustomerSay>
            <Cta></Cta>
        </div>
    );
};

export default Home;