import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isGridView: false, isEnglish: true },
  reducers: {
    controlLayout(state, action) {
      if (action.payload === "grid") state.isGridView = true;
      if (action.payload === "list") state.isGridView = false;
    },
    toggleLanguage(state) {
      state.isEnglish = !state.isEnglish;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
