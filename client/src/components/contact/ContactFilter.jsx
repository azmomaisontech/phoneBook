import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contacts/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const filter = useRef("");
  const { filterContact, clearFilter, filtered } = contactContext;

  const onChange = e => {
    if (filter.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    if (filtered === null) {
      filter.current.value = "";
    }
  });

  return (
    <form>
      <input
        type="text"
        ref={filter}
        name="filter"
        placeholder="Filter Contact..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
