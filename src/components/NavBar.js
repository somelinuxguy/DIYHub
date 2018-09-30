import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let NavBar = (props) =>
    <div className="navBar">
        <div className="flex">
            <Link to="/"><img src="./images/DIYhublogo.png" className="navGear" alt="DIY Cog"/></Link>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/about" className="navLink">About</Link>
        </div>
        <div className="flex">
            {console.log(props.user.name)}
            {localStorage.token ?
                <div>
                    <Link to="/post" className="navLink"> Post Project</Link>
                    <span className="navLink" onClick={event =>{
                        localStorage.removeItem('token');
                        localStorage.removeItem('name');
                        localStorage.removeItem('id');
                        props.dispatch({type: "LOGOUT",  empty: ""})
                    }}> Log Out</span>
                </div>
            : 
                <div>
                    <Link to="/signup" className="navLink">Sign Up</Link>
                    <Link to="/login" className="navLink"> Log In</Link>
                </div>
            }</div>
    </div>

let NavBarSmart = connect(state => ({user: state.user}))(NavBar)

export default NavBarSmart;