import './UserDetails.css';

export default function UserDetails({item}){
    const {email, phone, address, website} = item;
    return(
        <div className='user_details'>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>Phone:</strong> {phone}</div>
            <div><strong>Address:</strong> {address.city}, {address.street}, {address.suite}</div>
            <div><strong>Website:</strong> {website}</div>
        </div>
)
}