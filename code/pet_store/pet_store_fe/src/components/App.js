import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BaseRouter from '../routes';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from "react-redux";

class App extends Component{

    componentDidMount(){
//        this.props.authCheckState();
    }

    render(){
        return(
        <>
                <Router>
                    <BaseRouter />
                </Router>
        </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
//        authCheckState: () => dispatch(authCheckState()),
  };
}

//ReactDOM.render(<App />, document.getElementById('app'));
export default connect(null, mapDispatchToProps)(App);
