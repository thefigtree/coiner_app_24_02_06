import axios from "axios";
import { create } from "zustand";

export const ShowStore = create((set) => ({
  fetchData: (id) => {
    console.log("hey", id);
  },
}));
