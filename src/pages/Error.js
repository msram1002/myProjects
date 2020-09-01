import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
// For error page wanted to have the Home background

export default function error() {
    return <Main>
    <Banner title="404" subtitle="page not found ">
        <Link to="/" className="btn-primary">
            return home
        </Link>
    </Banner>
</Main>
}
