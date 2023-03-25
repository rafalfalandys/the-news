import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isGridView: false, isEnglish: true, isModalVisible: false },
  reducers: {
    controlLayout(state, action) {
      if (action.payload === "grid") state.isGridView = true;
      if (action.payload === "list") state.isGridView = false;
    },
    toggleLanguage(state) {
      state.isEnglish = !state.isEnglish;
    },
    controlModal(state, action) {
      if (action.payload === "show") state.isModalVisible = true;
      if (action.payload === "hide") state.isModalVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
