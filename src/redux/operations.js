import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL =
  'https://646338367a9eead6fae04915.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(`${API_BASE_URL}/contacts`);
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async values => {
    const response = await axios.post(`${API_BASE_URL}/contacts`, values);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`${API_BASE_URL}/contacts/${id}`);
    return id;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export default contactsSlice.reducer;
