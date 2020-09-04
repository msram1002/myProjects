import React, {Component} from 'react'
import {RoomContext} from '../Context';
import Loading from './Loading';
import Title from './Title';
import Room from './Room';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms: featRooms} = 
        this.context;
        featRooms = featRooms.map(featroom => {
            return <Room key={featroom.id}
            room={featroom} />
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading?<Loading />: featRooms}
                </div>
            </section>
        )
    }
}
