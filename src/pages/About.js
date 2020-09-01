import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const About = () => {
    return <Main main="aboutUsMain">
        {/* no subtitle needed */}
    <Banner title="About Us" subtitle="We are the best!">
        <Link to="/" className="btn-primary">
            return home
        </Link>
    </Banner>
</Main>
}

export default About;