import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Home() {
    return <Main>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
                our rooms
            </Link>
        </Banner>
    </Main>
}