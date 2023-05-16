import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/slice';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsSlice';
import b from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const findContats = () => {
    const normolizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normolizedFilter)
      );
    }
  };

  const filteredContacts = findContats();
  
  return (
    <>
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <ul className={b}>
          {filteredContacts.map(({ id, name, phone }) => {
            return (
              <li key={id}>
                <div>
                  <h3>{name}:</h3>
                  <p>{phone}</p>
                </div>
                <button
                  type='button'
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  {isLoading ? '...' : 'Delete'}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
