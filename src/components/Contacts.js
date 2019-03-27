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
                    name: 'Pratyusha',
                    email: 'pk@gmail.com',
                    phone: '9563014587'
                },
            ]
        };

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }
    
  render() {
      const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
            <Contact 
                key={contact.id}
                contact={contact} 
                  deleteClickHandler= {this.deleteContact} />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;