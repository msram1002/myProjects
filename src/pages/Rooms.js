import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Rooms = () => {
    return <Main main="roomsMain">
        {/* no subtitle needed */}
        <Banner title="a world of options" 
        subtitle="our reward members can save more with up to 20% off">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Main>
}

export default Rooms;
