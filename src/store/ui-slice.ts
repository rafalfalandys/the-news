import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isGridView: true,
    isEnglish: false,
    isModalVisible: false, // controls header popup
    results: { total: 0, onScreen: 20 }, // data to be dispalyed in footer
    isSidebarVisible: false, // controls sidebar on phones
  },
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
    controlResults(
      state,
      action: { payload: { total: number; onScreen: number } }
    ) {
      state.results = action.payload;
    },
    toggleSidebar(state) {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
