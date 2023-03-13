import { useContext } from 'react';
import { AppContext } from '../App.js';

export const Home = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            <h1>Home , user: {username} </h1>
        </div>
    );
}