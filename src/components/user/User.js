import './User.css';
import {Link, Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";

export default function User({item}){
    const {id, name, username} = item;

    return(
        <div className={'user'}>
            {id}. {name} {username} - <Link to={'/users/' + id}>show info</Link>

            <Route path={'/users/' + id} render={() => <UserDetails item={item} /> }/>
        </div>
    )
}