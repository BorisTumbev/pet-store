import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

export class MainLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
    };

    logout = (e) => {
        this.props.logout()
        console.log('logout')
    };

    render() {

        return (
            <>
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">Pet Store</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#pets">Pets</Nav.Link>
                      <Nav.Link href="#shop">Shop</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#login">Login</Nav.Link>
                      <Nav.Link href="#register">Sign up</Nav.Link>
                      <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                      Signed in as: Mark Otto
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
