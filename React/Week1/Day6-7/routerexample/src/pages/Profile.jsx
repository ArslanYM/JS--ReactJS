import {ChangeProfile} from './ChangeProfile.jsx';
import { useContext } from 'react';
import { AppContext } from '../App.js';


export const Profile = (props) => {
    const { username} = useContext(AppContext);
    return (
        <div>
            <h1>Profile for {username} </h1>
            <ChangeProfile/>
        </div>
    );
}