import React, { Component } from 'react';  //rce - Class  rfce - funtional
import ActionOne from '../actions/actionOne';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

class firtsComponent extends Component {
    render() {
        return (
            <div>
                <button>Click</button>
            </div>
        )
    }
}

export default firtsComponent
