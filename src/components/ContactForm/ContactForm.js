import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContact }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: '',
      }}
      onSubmit={(initialValues, actions) => {
        initialValues.id = nanoid();
        addContact(initialValues);

        actions.resetForm({
          initialValues: {
            name: '',
            number: '',
            id: '',
          },
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
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </div>
);
