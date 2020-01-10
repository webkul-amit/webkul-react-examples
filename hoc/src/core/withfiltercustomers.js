import React from 'react';

const withFilterCustomers = BaseComponent => ({ list, email }) => {
    const transformedProps = list.filter(customer => customer.email === email)
    return <BaseComponent list={transformedProps} />
}

export default withFilterCustomers;