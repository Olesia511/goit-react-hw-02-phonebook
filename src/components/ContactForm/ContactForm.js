import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

function resetForm(evt) {
  console.log(`+++++++ evt`, evt.target);
}
export const ContactForm = ({ addContact }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: '',
      }}
      onSubmit={initialValues => {
        initialValues.id = nanoid();
        addContact(initialValues);
        return (initialValues = {
          name: '',
          number: '',
          id: '',
        });
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" /*placeholder="Jane" */ type="text" required />
        </label>

        <label>
          Number
          <Field
            name="number"
            /*placeholder="111 11 11" */ type="tel"
            required
          />
        </label>
        <button type="submit" onClick={resetForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  </div>
);
