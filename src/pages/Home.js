import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
export default function Home() {
    return (
        // A common pattern in React is for a component to return multiple elements. 
        // Fragments let you group a list of children without adding extra nodes to the DOM.
        // <> is shorter syntax
    <>
    <Main>
        <Banner title="welcoming guests since 2005" subtitle="Enjoy 10% off, booking flexibility, and free breakfast.">
            <Link to="/rooms" className="btn-primary">
                stay with us
            </Link>
        </Banner>
    </Main>
    <Services />
    <FeaturedRooms />
    </>);
}