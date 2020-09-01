import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';

export default function Home() {
    return (
        // A common pattern in React is for a component to return multiple elements. 
        // Fragments let you group a list of children without adding extra nodes to the DOM.
        // <> is shorter syntax
    <>
    <Main>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
                our rooms
            </Link>
        </Banner>
    </Main>
    <Services />
    </>);
}