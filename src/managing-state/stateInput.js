import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City Quiz</h2>
      <p>
        In which is city there is a billboard which says air turn into drinkable
        water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error != null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let rightAnswer = answer.toLowerCase() === "lima";
        if (!rightAnswer) {
          reject(new Error("Good guess but a wrong answer"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }
}
