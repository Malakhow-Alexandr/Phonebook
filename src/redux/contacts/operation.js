import axios from 'axios';
import { toast } from 'react-toastify';
import { formatName } from 'utils/formatName';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      toast.success(`${formatName(contact.name)} added to contacts!`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      toast.success(`${formatName(contact.name)} data overwritten!`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
