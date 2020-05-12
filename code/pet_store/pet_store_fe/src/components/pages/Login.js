import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";


export class Login extends Component {


    render() {
//        if (this.props.isAuthenticated) {
//            return <Redirect to="/" />;
//        }

        return (
            Login
        );

    }
}


const mapStateToProps = state => ({
//    isAuthenticated: state.auth.token != null
});

function mapDispatchToProps(dispatch) {
    return {
//        login: (email, password) => dispatch(login(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
