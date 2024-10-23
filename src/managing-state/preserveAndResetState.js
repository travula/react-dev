import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./contactList";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList contacts={contacts} selectedContact={to} />
      <Chat contact={to} key={to.id} />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@email.com" },
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
];
