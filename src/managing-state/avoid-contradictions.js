import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  if (isSent()) {
    return <h1>Thanks for the feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at prancing pony</p>
      <textarea
        disabled={isSending()}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <button disabled={isSending()} type="submit">
        Send
      </button>
      {isSending && <p>Sending</p>}
    </form>
  );

  function sendMessage(text) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  function isSending() {
    if (status === "sending") return true;
    else return false;
  }

  function isSent() {
    if (status === "sent") return true;
    else return false;
  }
}
