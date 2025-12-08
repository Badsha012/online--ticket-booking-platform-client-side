import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Ticket } from 'lucide-react';
import Details from '../Components/Details';

const TicketDetails = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

           <main className='flex-1'>
             <Details></Details>
           </main>
            

            <Footer></Footer>
        </div>
    );
};

export default TicketDetails;
