import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset(e) {
    e.preventDefault();
    setFirstName("");
    setLastName("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button type="submit">Send</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
