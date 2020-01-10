import React, { Component } from 'react';

class CustomerList extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            customers : []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.handleParent(id);
    }

    render() {
        
        const {customer} = this.props;
        
        return <li key={customer.id} onClick={() => { this.handleClick(customer.id)}}>{customer.username}</li>
    }

}

export default CustomerList;
