import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };


    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
    })


    return (
        <>
            <h2 style={{ paddingTop: "40px", }}>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right" style={{ marginLeft: "5px" }}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui ceiled list">
                {renderContactList}
            </div>
        </>
    )
};


export default ContactList;