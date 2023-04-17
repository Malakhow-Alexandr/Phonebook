import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operation';
import {
  StyledForm,
  Label,
  StyledErrorMessage,
  StyledField,
  Button,
  StyledLabel,
} from './ContactForm.styled';
import { toast } from 'react-toastify';
import { validationSchema } from 'utils/contactsValidationSchema';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      name: values.name,
      number: values.number,
    };

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(values.name.toLowerCase())
    ) {
      return toast.warn(`${values.name} is alredy in contacts.`);
    }

    dispatch(addContacts(contact));

    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label>
          <StyledField type="text" name="name" />
          <StyledLabel>Name</StyledLabel>
          <ErrorMessage component={StyledErrorMessage} name="name" />
        </Label>

        <Label>
          <StyledField type="tell" name="number" />
          <StyledLabel>Number</StyledLabel>
          <ErrorMessage component={StyledErrorMessage} name="number" />
        </Label>

        <Button type="submit">Add Contact</Button>
      </StyledForm>
    </Formik>
  );
};
