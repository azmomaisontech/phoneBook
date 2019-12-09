import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contacts/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const {
    addContact,
    updateContact,
    currentContact,
    clearCurrent
  } = contactContext;

  useEffect(() => {
    if (currentContact !== null) {
      setContact(currentContact);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, currentContact]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const onChange = e => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (currentContact === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  const { name, email, phone, type } = contact;

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {currentContact ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChange}
        checked={type === "personal"}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        checked={type === "professional"}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={currentContact ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {currentContact && (
        <button className="btn btn-light btn-block" onClick={clearAll}>
          Clear
        </button>
      )}
    </form>
  );
};

export default ContactForm;
