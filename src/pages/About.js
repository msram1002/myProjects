import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const About = () => {
    return <Main main="aboutUsMain">
        <Banner title="we are the best!" 
        subtitle="at msr beach resorts we know what you want, a seamless stay!">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Main>
}

export default About;