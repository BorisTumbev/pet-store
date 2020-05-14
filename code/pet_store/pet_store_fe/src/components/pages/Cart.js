import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getProduct, addToCart } from "../../actions/shop";
import {
    Table,
    Button
} from 'react-bootstrap';

export class Cart extends Component {

    componentDidMount(){
    }

    renderCartProducts(){
        return this.props.cart.map(function (e, index){
            return(
                <tr key={index}>
                  <td>{index}</td>
                  <td>{e.name}</td>
                  <td>{e.size}</td>
                  <td>{e.color}</td>
                  <td>{e.price}</td>
                </tr>
            )
        })
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
        }

        var priceTotal = this.props.cart.reduce(function(prev, cur) {
            return prev + cur.price;
        }, 0);

        return (
            <>
                <MainLayout {...this.props}>
                   <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Size</th>
                          <th>Color</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderCartProducts()}
                      </tbody>
                    </Table>
                    <div>Total amount: {priceTotal}</div>
                    <div><Button variant="warning">Pay</Button></div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    cart: state.shop.cart,
});

function mapDispatchToProps(dispatch) {
    return {
//        getProduct: (id) => dispatch(getProduct(id)),
//        addToCart: (product) => dispatch(addToCart(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
