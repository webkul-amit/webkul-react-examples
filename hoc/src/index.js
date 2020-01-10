import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import FilteredList from './basic/filteredListClass';
// import FilteredListNonReusable from './hoc/filteredListNotReusable';
// import DisplayList from './hoc/displayList';
// import ReusedWithTransformProps from './hoc/reusedWithTransformProps';
// import ConditionedList from './hoc/withCondition';
// import FilteredProps from './hoc/withFilterProps';
// import FilteredTransformedList from './hoc/withTransformProps';
import Customer from './core/customer';
const starWarsChars = [
    { name: 'Luke', side: 'light' },
    { name: 'Darth Vader', side: 'dark' },
    { name: 'Obi-wan Kenobi', side: 'light' },
    { name: 'Palpatine', side: 'dark' }
]

const customers = [
    { "id": 2, "email": "johndoe@webkul.com", "first_name": "John", "last_name": "Doe", "username": "johndoe", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/a1a6530e956ba63926044cf40cecba0b?s=96&d=mm&r=g" }, 
    { "id": 5, "email": "kate@webkul.com", "first_name": "Kate", "last_name": "", "username": "kate", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/f9332b0de22520960530a69f347dda5c?s=96&d=mm&r=g"}, 
    { "id": 6, "email": "mark@webkul.com", "first_name": "Mark", "last_name": "Doe", "username": "mark", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/f71312266920deb5a3811642b85fd1d3?s=96&d=mm&r=g" }, 
    { "id": 7, "email": "pete@webkul.com", "first_name": "Pete Doe", "last_name": "Doe", "username": "Pete", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/010afaa8cca2150d52ce5119d9daf38c?s=96&d=mm&r=g" }, 
    { "id": 8, "email": "jack@webkul.com", "first_name": "Jack", "last_name": "Doe", "username": "jack", "avatar_url": "https:\/\/secure.gravatar.com\/avatar\/e295f8693336aaef938a3b6957a1616b?s=96&d=mm&r=g"}
];
ReactDOM.render(<Customer/>, document.getElementById('root'));