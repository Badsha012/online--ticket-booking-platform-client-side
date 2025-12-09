import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MyBookings from '../Components/MyBookings';

const MyBookingPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-1'>
                <MyBookings></MyBookings>
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default MyBookingPage;