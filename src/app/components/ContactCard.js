import React from "react";

import ContactCardDesk from "./ContactCard/ContactCardDesk";
import ContactCardMbl from "./ContactCard/ContactCardMbl";

const ContactCard = () => {
  return (
    <div className="">
      <ContactCardDesk />
      <ContactCardMbl />
    </div>
  );
};

export default ContactCard;
