import RespEvents from "./respEvents";
import Gallery from "./state";
import Form from "./form";
import FeedbackForm from "./text";
import RequestTracker from "./queue";
import TestQueue from "./testQueue";
import TaskApp from "./todos";

export default function App() {
  return (
    <>
      <h1>Task App</h1>
      <TaskApp />
      <br />
      <br />
      <h1>Test Queues</h1>
      <TestQueue />
      <br />
      <br />
      <h1>Market Place</h1>
      <RequestTracker />
      <br />
      <br />
      <h1>FeedBack Form</h1>
      <FeedbackForm />
      <br />
      <br />
      <h1>Form</h1>
      <Form />
      <br />
      <br />
      <h1>Responsive Events</h1>
      <RespEvents />
      <br /> <br />
      <h1>Gallery</h1>
      <div className="page">
        <Gallery />
        <br />
        <br />
        <Gallery />
      </div>
    </>
  );
}
