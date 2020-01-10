import React, { Component } from 'react';

function SelectedCustomer(props) {

    const {customer} = props;
    let selected = customer[0];

    if( customer.length> 0 ) {
        return <h1>{selected.username}</h1>

    } else {
        
        return <h1>Not Selected Customer</h1>
    }

}

export default SelectedCustomer;
