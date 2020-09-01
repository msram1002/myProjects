import React, { Component } from 'react';
import {FaHamburger, FaDumbbell, FaShuttleVan, FaCocktail} from 'react-icons/fa';
import Title from './Title';
import {Link} from 'react-router-dom';

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaHamburger/>,
                title:"fuel your day",
                info: "Start your day with our variety of healthy and hot options worth waking up for."
            },
            {
                icon: <FaDumbbell/>,
                title:"fitness center",
                info: "Fitness centers with state-of-the-art equipment so you can stay fit and focused while you stay with us."
            },
            {
                icon: <FaShuttleVan/>,
                title:"shuttle service",
                info: "Take a shuttle straight to your destination with no stops in between."
            },
            {
                icon: <FaCocktail/>,
                title:"evening reception",
                info: "Treat yourself to our evening reception, featuring complimentary small plate and drink options."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Featured Amenities" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}

                </div>

                <Link to="/" className="btn-primary">
                    all amenities
                </Link>
            </section>
        )
    }
}
