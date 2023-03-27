import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isGridView: false,
    isEnglish: true,
    isModalVisible: false,
    results: { onPage: 20, total: 0 },
    pages: { curent: 1, total: 1 },
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
      action: { payload: { onPage: number; total: number } }
    ) {
      state.results = action.payload;
      state.pages.total = Math.floor(
        action.payload.total / action.payload.onPage + 1
      );
    },
    controlResultsPerPage(state, action: { payload: number }) {
      console.log(action.payload);
      const total = Math.floor(action.payload / state.results.total + 1);
      state.results = { total, onPage: action.payload };
    },
    controlPage(state, action) {
      if (action.payload === "next") {
        if (state.pages.curent === state.pages.total) return;
        state.pages.curent++;
      }
      if (action.payload === "previous") {
        if (state.pages.curent === 1) return;
        state.pages.curent--;
      }
      if (action.payload) state.pages.curent = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
