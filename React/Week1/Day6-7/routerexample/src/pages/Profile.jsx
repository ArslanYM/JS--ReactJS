import {ChangeProfile} from './ChangeProfile.jsx';
export const Profile = (props) => {
    return (
        <div>
            <h1>Profile for {props.username}</h1>
            <ChangeProfile setUsername={props.setUsername}/>
        </div>
    );
}