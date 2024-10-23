import Form from "./stateInput";
import Accordion from "./accordian";
import Messenger from "./preserveAndResetState";
import ContactList from "./contactList";

export default function App() {
  return (
    <>
      <h1>Task App</h1>
      <Form />
      <br />
      <br />
      <Accordion />
      <br />
      <Messenger />
    </>
  );
}
