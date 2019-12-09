import React, { Fragment, useContext, useEffect } from "react";
import ContactContext from "../../context/contacts/contactContext";
import ContactItems from "./ContactItems";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Spinner from "../layout/Spinner";

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContact, loading } = contactContext;

  useEffect(() => {
    getContact();

    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading)
    return <h4>Please Enter A Contact</h4>;

  const contactsDisplay = filtered !== null ? filtered : contacts;

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {contactsDisplay.map(contact => (
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItems contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contact;
