import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };


    const contacts = [
        {
            id: "1",
            name: "bla",
            email: 'bla@abv.bg',
        },
        {
            id: "1",
            name: "bla",
            email: 'bla@abv.bg',
        },
        {
            id: "1",
            name: "bla",
            email: 'bla@abv.bg',
        },
    ]
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
    })



    return (
        <div className="main">
            <h2>
                Contact List
                <button className="ui button blue right">Add Contact</button>
            </h2>
            <div className="ui ceiled list">
                {renderContactList}
            </div>

        </div>
    )

};


export default ContactList;