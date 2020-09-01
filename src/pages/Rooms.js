import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Rooms = () => {
    return <Main main="roomsMain">
        {/* no subtitle needed */}
        <Banner title="our rooms" 
        subtitle="our reward members save 10%">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Main>
}

export default Rooms;
