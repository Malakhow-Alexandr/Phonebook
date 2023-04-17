import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';
import { ListStyled } from './ContactLists.styled';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ListStyled>
      {filteredContacts?.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ListStyled>
  );
};
