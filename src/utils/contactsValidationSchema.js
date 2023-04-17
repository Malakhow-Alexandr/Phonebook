import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required(),
  number: yup
    .string()
    .trim()
    .test(
      'maxDigits',
      'Phone number must not have more than 12 digits',
      value => {
        if (!value) return true;
        const numDigits = value.replace(/\D/g, '').length;
        return numDigits <= 12;
      }
    )
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});
