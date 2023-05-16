import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.value;
export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
