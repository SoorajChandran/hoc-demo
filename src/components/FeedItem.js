import React from "react";

const FeedItem = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(
    contact => contact.name.indexOf(filterText) !== -1
  );

  return (
    <div className="col-sm-4 offset-4">
      {filteredContacts.map(contact => (
        <div className="row p-2" key={contact.email}>
          <div className="col-sm-2">
            <img
              className="rounded-circle"
              src={contact.thumbnail}
              role="presentation"
            />
          </div>
          <div className="feedData col-sm-9">
            <strong>{contact.name}</strong>
            <br />
            <small>{contact.email}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedItem;
