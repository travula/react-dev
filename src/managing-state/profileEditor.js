import { useState } from "react";

export default function ProfileEditor() {
  const [isEditing, setIsEditing] = useState(true);
  const [lastName, setlastName] = useState("Jacobs");
  const [firstName, setFirstName] = useState("Jane");

  if (isEditing) {
    return (
      <form>
        <label>
          First name:
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
        </label>
        <br />
        <button type="submit" onClick={() => setIsEditing(false)}>
          Save Profile
        </button>
        <br />
        <p>
          <i>
            Hello, {firstName} {lastName}!
          </i>
        </p>
      </form>
    );
  } else {
    return (
      <div>
        <label>First name: {firstName}</label>
        <br />
        <label>Last name: {lastName}</label>
        <br />
        <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        <br />
        <p>
          <i>
            Hello, {firstName} {lastName}!
          </i>
        </p>
      </div>
    );
  }
}
