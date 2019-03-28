import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
        state={
            contacts: [
                {
                    id: 1,
                    name: 'Tarun',
                    email: 'tarun.manchu15@gmail.com',
                    phone: '9876543201'
                },
                {
                    id: 2,
                    name: 'Mounika',
                    email: 'ms@gmail.com',
                    phone: '9865832147'
                },
                {
                    id: 3,
                    name:  'Kalyan',
                    email: 'pk@gmail.com',
                    phone: '9563014587'
                },
            ]
        };

    deleteContact = id => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => 
            contact.id !== id);

            this.setState({
                contacts: newContacts
            });
    };
    
  render() {
      const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
            <Contact 
                key={contact.id}
                contact={contact} 
                  deleteClickHandler= {this.deleteContact.bind(this,
                    contact.id)} />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;