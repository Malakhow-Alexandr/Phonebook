import { ErrorMessage, Formik } from 'formik';
import { validationSchema } from 'utils/contactsValidationSchema';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operation';
import {
  LabelEdit,
  StyledErrorEditMessage,
  StyledEditField,
  StyledEditForm,
  ButtonEdit,
} from './ContactEditForm.styled';

export const ContactEditForm = ({ id, initialValues, onSubmit }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      id,
      name: values.name,
      number: values.number,
    };
    dispatch(updateContact(contact));
    resetForm();
    onSubmit();
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <StyledEditForm>
        <LabelEdit>
          <StyledEditField type="text" name="name" />
          <ErrorMessage component={StyledErrorEditMessage} name="name" />
        </LabelEdit>

        <LabelEdit>
          <StyledEditField type="tell" name="number" />
          <ErrorMessage component={StyledErrorEditMessage} name="number" />
        </LabelEdit>

        <ButtonEdit type="submit">Update</ButtonEdit>
        <ButtonEdit
          type="button"
          onClick={() => {
            onSubmit();
          }}
        >
          Cancel
        </ButtonEdit>
      </StyledEditForm>
    </Formik>
  );
};
