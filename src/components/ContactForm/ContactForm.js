import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrMsg } from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\d{3} \d{2} \d{2}$/,
      'Enter the number in the format "111 11 11"'
    )
    .required('Required'),
});

export const ContactForm = ({ addContact }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: '',
      }}
      validationSchema={formSchema}
      onSubmit={(initialValues, actions) => {
        initialValues.id = nanoid();
        addContact(initialValues);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" /*placeholder="Jane" */ type="text" required />
          <ErrMsg name="name" component="span" />
        </label>

        <label>
          Number
          <Field
            name="number"
            /*placeholder="111 11 11" */ type="tel"
            required
          />
          <ErrMsg name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </div>
);
