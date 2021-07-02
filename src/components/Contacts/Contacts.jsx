import { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import List from "./ContactList/ContactList"

import {
  getAllContacts,
  removeContact,
} from "../../redux/contacts/contactsOperations";
import {
  selectAllContacts,
  selectFilteredItems,
} from "../../redux/contacts/contactsSelectors";

class Contacts extends Component {
  
  componentDidMount() {
    this.props.getAllContacts();
  }
  render() {
    const { items } = this.props;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.filter} handleChange={this.handleChange} />
        <List items={items} handleDelete={this.props.handleDelete} />
      </div>
    );
  }
}

const mapState = (state) => {
  const items = selectAllContacts(state);

  return {
    items: selectFilteredItems(state),
    originalItems: items,
    loading: state.contacts.loading,
  };
};

const mapDispatch = {
  handleDelete: removeContact,
  getAllContacts,
};

export default connect(mapState, mapDispatch)(Contacts);
