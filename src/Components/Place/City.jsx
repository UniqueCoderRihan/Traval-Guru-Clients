import React from 'react';

const City = ({ city }) => {
    console.log(city);
    const { id, price, description, imageLink, name } = city;
    return (
       <>
        <p className='text-primary'>{name}</p>
       </>
    );
};

export default City;