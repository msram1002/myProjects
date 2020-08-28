import React, { Component } from 'react';
import logo1 from '../images/logo1.svg';
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            
        )
    }
}
