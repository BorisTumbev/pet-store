import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getProducts } from "../../actions/shop";
import {
    CardDeck,
    Card,
} from 'react-bootstrap';

export class Shop extends Component {

    componentDidMount(){
        this.props.getProducts();
    }

    renderProducts(){
        return this.props.products.map(function (e, index){
            return(
                  <Card key={index} className='pet-card'>
                    <Card.Img variant="top" src={e.picture_url} />
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href={`#product/${e.id}`}>details</Card.Link>
                    </Card.Body>
                  </Card>
            )
        })
    }

    render() {
//        if (!this.props.isAuthenticated) {
//            return <Redirect to="/login" />;
//        }

        return (
            <>
                <MainLayout {...this.props}>
                    <div className='pet-cards'>
                        {this.renderProducts()}
                    </div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    products: state.shop.products,
});

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
