import { ErrorMessage, Formik } from 'formik';
import { validationSchema } from 'utils/contactsValidationSchema';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operation';
import { Form, Field } from 'formik';

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
      <Form>
        <label>
          <Field type="text" name="name" />
          <span>Name</span>
          <ErrorMessage name="name" />
        </label>

        <label>
          <Field type="tell" name="number" />
          <span>Number</span>
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Update</button>
        <button
          type="button"
          onClick={() => {
            onSubmit();
          }}
        >
          Cancel
        </button>
      </Form>
    </Formik>
  );
};
