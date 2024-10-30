import Form from "./Form";

let statuses = [`empty`, `submitting`, `error`, `success`, `typing`];

export default function AllViews() {
  return (
    <>
      {statuses.map((status) => {
        return (
          <section key={status}>
            <h4>Form ({status}):</h4>
            <Form status={status} />
          </section>
        );
      })}
    </>
  );
}
