import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  ButtonForm,
  ErrMsg,
  FormContact,
  InputForm,
  LabelForm,
} from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'The name must contain only letters')
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
      <FormContact>
        <LabelForm>
          Name
          <InputForm name="name" placeholder="Olesia" type="text" required />
          <ErrMsg name="name" component="span" />
        </LabelForm>

        <LabelForm>
          Number
          <InputForm
            name="number"
            placeholder="111 11 11"
            type="tel"
            required
          />
          <ErrMsg name="number" component="span" />
        </LabelForm>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormContact>
    </Formik>
  </div>
);
