import { useState } from "react";

export default function RedundantState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  return (
    <>
      <h2>Let's Check You In</h2>
      <label>
        First Name:{" "}
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:{" "}
        <input value={lastName} onChange={(e) => setlastName(e.target.value)} />
      </label>
      <p>
        Your ticket will be issued to {firstName} {lastName}
      </p>
    </>
  );
}
