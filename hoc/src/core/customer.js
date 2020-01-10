import React, { Component } from 'react';
import CustomerList from './list';
import SelectedCustomer from './selected';
// import withFilterCustomers from './withfiltercustomers';

class Customer extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            customers : [],
            selected : []
        }

        this.onSelected = this.onSelected.bind(this);
    }

    componentDidMount() {

        const customers = [
            { "id": 2, "email": "johndoe@webkul.com", "first_name": "John", "last_name": "Doe", "username": "johndoe", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/a1a6530e956ba63926044cf40cecba0b?s=96&d=mm&r=g" }, 
            { "id": 5, "email": "kate@webkul.com", "first_name": "Kate", "last_name": "", "username": "kate", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/f9332b0de22520960530a69f347dda5c?s=96&d=mm&r=g"}, 
            { "id": 6, "email": "mark@webkul.com", "first_name": "Mark", "last_name": "Doe", "username": "mark", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/f71312266920deb5a3811642b85fd1d3?s=96&d=mm&r=g" }, 
            { "id": 7, "email": "pete@webkul.com", "first_name": "Pete Doe", "last_name": "Doe", "username": "Pete", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/010afaa8cca2150d52ce5119d9daf38c?s=96&d=mm&r=g" }, 
            { "id": 8, "email": "jack@webkul.com", "first_name": "Jack", "last_name": "Doe", "username": "jack", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/e295f8693336aaef938a3b6957a1616b?s=96&d=mm&r=g"}
        ];

        this.setState({
            customers : customers
        });
    }

    onSelected(id) {
        let selectedCustomer = this.state.customers.filter((customer) => {
            return customer.id == id;
        });

        this.setState({
            selected : selectedCustomer
        });
    }

    render() {
        console.log(this.state);
        
        // return(<CustomerList customer = {this.props.list[0]}></CustomerList>);
        if( this.state.customers.length > 0 ) {
            
            const list = this.state.customers.map((customer) => {
                return <CustomerList handleParent={this.onSelected} customer = {customer}></CustomerList>
            });

            return(
                <div>
                    <ul>{list}</ul>
                    <SelectedCustomer customer={this.state.selected}></SelectedCustomer>
                </div>
            )

        } else {
            return (<li>No customer available</li>)
        }

    }

}

export default Customer;
