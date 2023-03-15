import React from 'react';
import PropTypes  from 'prop-types';
export const Person = (props) => {
    return (<div>
        <p>My name is {props.name} and I am {props.age} years old.</p>
        <p>My friends are:</p>
        {props.friends.map(friend => <p>{friend}</p>)}
    </div>
    );
};


Person.PropTypes({
    name: PropTypes.string,
    age: PropTypes.number,
    friends: PropTypes.arrayOf(PropTypes.string)
})
