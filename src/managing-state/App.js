import Form from "./stateInput";
import Accordion from "./accordian";
import Messenger from "./preserveAndResetState";
import ContactList from "./contactList";
import AllViews from "./allViews";
import Picture from "./picture";
import ProfileEditor from "./profileEditor";
import MovingDot from "./moving-dot";
import FeedbackForm from "./avoid-contradictions";
import RedundantState from "./redundant-state";
import Menu from "./duplicate-state";

export default function App() {
  return (
    <>
      <h1>Task App</h1>
      <br />
      <br />
      <Form />
      <br />
      <br />
      <Accordion />
      <br />
      <br />
      <Messenger />
      <br />
      <br />
      <AllViews />
      <br />
      <br />
      <Picture />
      <br />
      <br />
      <ProfileEditor />
      <br />
      <br />
      {/* <MovingDot /> */}
      <FeedbackForm />
      <RedundantState />
      <Menu />
    </>
  );
}
