import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shouldShowSendMessageModal: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    toggleSendMessageForm: (state) => {
      state.shouldShowSendMessageModal = !state.shouldShowSendMessageModal;
    },
  }
});

export const { toggleSendMessageForm } = popupSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectShouldShowSendMessageModal = (state) => state.popup.shouldShowSendMessageModal;

export default popupSlice.reducer;
