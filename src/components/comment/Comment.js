import './Comment.css';
import {Link, Route} from "react-router-dom";

export default function Comment({item}){
    const {id, name, email, body} = item;

    return(
        <div className={'comment'}>
            <div>{id}. {name}</div>
            <strong>{email}</strong> - <Link to={'/comments/' + id}>show info</Link>

            <Route path={'/comments/' + id} render={() => <div className={'cb'}>{body}</div>}/>
        </div>
    )
}