import './Post.css';
import {Link, Route} from "react-router-dom";

export default function Post({item}){
    const {id, title, body} = item;

    return(
        <div className={'post'}>
            {id}. {title} - <Link to={'/posts/' + id}>show info</Link>

            <Route path={'/posts/' + id} render={() => <div className='post_body'>{body}</div> }/>
        </div>
    )
}