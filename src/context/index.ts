import { createContext } from "react";

export const INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    login: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    role: "",
  },
  page: "landing",
}

export const AppContext = createContext({ state: INITIAL_STATE });