import React from 'react';


interface PersonProps {
    name: string;
    age: number;
    friends: string[];
    country: Country;
}

export enum Country {
    USA = "USA",
    UK = "UK",
    Canada = "Canada",
}

export const Person = (props : PersonProps) => {
    return (<div>
        <p>My name is {props.name} and I am {props.age} years old.</p>
        <p>My friends are:</p>
        {props.friends.map((friend) => <p>{friend}</p>)}
        <p>My country is {Country.USA}</p>
    </div>
    );
};



