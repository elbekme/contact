
import React, { Component } from 'react'
import { Container,Tabs,Tab } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'
import Contacts from '../components/Contacts'
import ContactFilter from '../components/ContactFilter'

export class HomePage extends Component {
    state = {
        contacts: [
            {
                id: 0,
                first: 'Elbek',
                last: 'Jo\'raqulov',
                phone: '906669896',
                category:"family",
                favourite: false,
            },
            {
                id: 1,
                first: 'Asilbek',
                last: 'Jo\'raqulov',
                phone: '912226980',
                category:"relatives",
                favourite: true,
            },
            {
                id: 1,
                first: 'Mardon',
                last: 'Botirov',
                phone: '916353456',
                category:"friend",
                favourite: false,
            },
        ],
        contact: {
            first: "",
            last: "",
            phone: "",
            category:"family",
        },
        search: "",
        category: "all",
    }

  render() {
    let {contacts, contact, search, category} = this.state;
    contacts = contacts.filter(contact => contact.first.toLowerCase().includes(search));
    const favourite = contacts.filter((contact) => contact.favourite);

    if(category !== "all"){
        contacts = contacts.filter((contact) => contact.category === category);
    }

    const handleSearch = (e) => {
        this.setState({ search: e.target.value.trim().toLowerCase() });
    };

    const handleCategory = (e) => {
        this.setState({ category: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        let newContacts = [...contacts, {...contact, favourite:false, id: Date.now() }];
        this.setState({contacts: newContacts, contact: {first:'',last:'',phone:'',category:'family'}});
    }

    const handleContact = (e) => {
        let newContact = {...contact, [e.target.id]: e.target.value};
        // contact[e.target.id] = e.target.value;
        this.setState({contact : newContact});
    };

    const doneContact = (id) => {
        let newDoneContact = contacts.map((contact) =>{
            if(contact.id === id){
                contact.favourite = true;
            }
            return contact;
        });
        this.setState({contacts:newDoneContact});
    }

    return (
      <Container >
          <ContactForm submit={submit} handleContact = {handleContact} contact={contact}/>
          <ContactFilter search={search} handleSearch={handleSearch} handleCategory={handleCategory} category={category}/>
          <Tabs
          variant='pills'
      defaultActiveKey="all"
      className="my-3" fill
    >
      <Tab eventKey="all" title="All Contacts">
        {contacts.map((contact,i) => (
            <Contacts doneContact={doneContact} key={i} no={i + 1} {...contact}/>
        ))}
      </Tab>
      <Tab eventKey="favourite" title="Favourite Contacts">
        {favourite.map((contact,i) =>(
            <Contacts doneContact={doneContact} key={i} no={i + 1} {...contact}/>
        ))}
      </Tab>
    </Tabs>
      </Container>
    )
  }
}

export default HomePage