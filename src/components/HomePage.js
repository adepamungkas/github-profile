import React, { useState, useEffect } from 'react';
import Profile from "./Profile";

import { connect } from "react-redux";
import * as reactStore from "../store/actions/action";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
const HomePage = (props) => {
   
    const handleChange = e => {
        console.log(e)
        props.handleUsername(e);
    };

    //   useEffect(() => {
          
    //   //  fetchData()
    //   }, [])

    const handleSubmitForm = e => {
        e.preventDefault();
        props.submitForm(e, props.username);
    };


    return (
        <Container>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Github Search</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Type username"
                        className="mr-sm-2"
                        onChange={handleChange}
                        name="username"
                        id="username"
                        autoComplete="off"
                    />
                    <Button onClick={handleSubmitForm} variant="outline-light">Search</Button>
                </Form>

            </Navbar>
            <div>
                <Profile data={props}/>
                
            </div>
          
        </Container>

    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        repos: state.repos,
        following: state.following,
        followers: state.followers,
        message: state.message,
        login:state.login,
        image_url:state.image_url,
        dataRepos:state.dataRepos,
        dataProfile:state.dataProfile,
        avatar_url:state.avatar_url
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUsername: e => dispatch(reactStore.handleUsername(e)),
        submitForm: (e, username) => dispatch(reactStore.submitForm(e, username)),
     
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

