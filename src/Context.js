import React, {Component} from 'react';
import items from './data';
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        allRooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };
    // getData
    // As the name suggests, after all the elements of the page is rendered correctly, 
    // this method is called. 
    // After the markup is set on the page, this technique called by React itself to either 
    // fetch the data from An External API or perform some unique operations which need the JSX elements.
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms:rooms, 
            loading: false
        })
    }
    // flattening the data from data.js
    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => 
                image.fields.file.url);
            let room = {...item.fields, id, images};
            return room;    
        });
        return tempItems;
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
            
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};