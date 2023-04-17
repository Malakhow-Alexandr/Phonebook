import { createSlice } from '@reduxjs/toolkit';

import {
  addContacts,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operation';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.rejected, handleRejected)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(updateContact.fulfilled, (state, action) => {
        const updItemIndx = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(updItemIndx, 1, action.payload);
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
